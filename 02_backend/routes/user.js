
import bcrypt from 'bcrypt';

import User from '~/database/models/user';
import commonConstants from '~/constants/common';
import messageConstants from '~/constants/message';
import utils from '~/utils';

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send(users);
  } catch (error) {
    console.log('[routes UserAPI getUsers] error => ', error);
    return res.status(500).json({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);
    return res.status(200).send(user);
  } catch (error) {
    console.log('[routes UserAPI getUser] error => ', error);
    return res.status(500).json({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
};

exports.addUser = async (req, res) => {
  try {
    let user = req.body;
    let currentUser = {};

    if (!!user.email) {
      currentUser = await User.findOne({ email: { $regex: new RegExp('^' + user.email.toLowerCase() + '$', 'i') } });
      if (!utils.isEmpty(currentUser)) {
        return res.status(500).json({
          message: messageConstants.USER_DUPLICATE_EMAIL_ERROR
        });
      }
    }

    if (!!user.password) {
      const hashedPassword = bcrypt.hashSync(user.password, commonConstants.BYCRYPT_LENGTH);
      user = {
        ...user,
        password: hashedPassword
      }
    }

    user = await User.create(user);
    return res.status(200).send(user);
  } catch (error) {
    console.log('[routes UserAPI addUser] error => ', error);
    return res.status(500).json({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    let user = req.body;
    let currentUser = {};

    if (!!user.email) {
      currentUser = await User.findOne({ email: { $regex: new RegExp('^' + user.email.toLowerCase() + '$', 'i') } });
      if (!utils.isEmpty(currentUser) && req.user.id !== currentUser._id.toString()) {
        return res.status(500).json({
          message: messageConstants.USER_DUPLICATE_EMAIL_ERROR
        });
      }
    }

    if (!!user.password) {
      const hashedPassword = bcrypt.hashSync(user.password, commonConstants.BYCRYPT_LENGTH);
      user = {
        ...user,
        password: hashedPassword
      }
    }

    user = await User.findOneAndUpdate({ _id: user._id }, { $set: user }, { new: true });
    return res.status(200).send(user);
  } catch (error) {
    console.log('[routes UserAPI editUser] error => ', error);
    return res.status(500).json({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
};

exports.removeUser = async (req, res) => {
  try {
    const _id = req.query._id;

    const user = await User.findOneAndDelete({ _id });
    return res.status(200).send(user);
  } catch (error) {
    console.log('[routes UserAPI removeUser] error => ', error);
    return res.status(500).json({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
};
