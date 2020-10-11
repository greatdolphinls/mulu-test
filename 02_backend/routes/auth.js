
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

import User from '~/database/models/user';
import { assertValidCredentials, assertValidAccount } from '~/routes/permissions/auth';
import commonConstants from '~/constants/common';
import messageConstants from '~/constants/message';
import utils from '~/utils';

exports.register = async (req, res) => {
  try {
    const { email, userName, password } = req.body;

    let user = await User.findOne({ email: { $regex: new RegExp('^' + email.toLowerCase() + '$', 'i') } });
    if (!utils.isEmpty(user)) {
      return res.status(402).json({
        message: messageConstants.AUTH_EMAIL_EXISTED_ERROR
      });
    }

    const hashedPassword = await bcrypt.hash(password, commonConstants.BYCRYPT_LENGTH);
    user = new User({
      email,
      userName,
      password: hashedPassword
    });
    user = await user.save();

    res.status(200).json({
      message: messageConstants.AUTH_REGISTER_SUCCESS
    });
  } catch (error) {
    console.log('[routes AuthAPI register] error => ', error);
    return res.status(500).json({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email: { $regex: new RegExp('^' + email.toLowerCase() + '$', 'i') } });
    if (utils.isEmpty(user)) {
      return res.status(404).json({
        message: messageConstants.AUTH_USER_NOT_FOUND
      });
    }

    assertValidAccount(user);
    assertValidCredentials(password, user.password);
    user.lastLoginAt = new Date();
    user.save();

    const payload = {
      id: user._id,
      role: user.role
    }
    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: commonConstants.EXPIRE_TIME });

    res.status(200).json({
      user: user,
      token: `Bearer ${jwtToken}`
    });
  } catch (error) {
    console.log('[routes AuthAPI login] error => ', error);
    return res.status(500).json({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
}

exports.forgotPassword = async (req, res) => {
  try {
    const { email, host } = req.body;

    let user = await User.findOne({ email: { $regex: new RegExp('^' + email.toLowerCase() + '$', 'i') } });
    if (utils.isEmpty(user)) {
      return res.status(404).json({
        message: messageConstants.AUTH_USER_NOT_FOUND
      });
    }

    assertValidAccount(user);
    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + commonConstants.EXPIRE_FORGOT_PASSWORD_EMAIL;
    await user.save();

    return res.status(200).json({ message: messageConstants.AUTH_PASSWORD_RESET_EMAIL_SENT });
  } catch (error) {
    console.log('[routes AuthAPI forgotPassword] error => ', error);
    return res.status(500).json({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
}

exports.resetPassword = async (req, res) => {
  try {
    const { password, resetPasswordToken } = req.body;
    let user = await User.findOne({
      resetPasswordToken: resetPasswordToken,
      resetPasswordExpires: { $gte: Date.now() }
    });

    if (utils.isEmpty(user)) {
      return res.status(403).json({
        message: messageConstants.AUTH_INVALID_RESET_LINK
      });
    }

    const hashedPassword = await bcrypt.hash(password, commonConstants.BYCRYPT_LENGTH);
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();

    return res.status(200).json({ message: messageConstants.AUTH_PASSWORD_UPDATED });
  } catch (error) {
    console.log('[routes AuthAPI forgotPassword] error => ', error);
    return res.status(500).json({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
}
