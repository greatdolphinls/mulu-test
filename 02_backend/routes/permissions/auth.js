
import bcrypt from 'bcrypt';

import messageConstants from '~/constants/message';
import commonConstants from '~/constants/common';
import utils from '~/utils';

const assertValidCredentials = (password, hashPassword) => {
  const matchPasswords = bcrypt.compareSync(password, hashPassword);
  if (!matchPasswords) {
    return res.status(404).json({
      message: messageConstants.AUTH_INVALID_CREDENTIAL
    });;
  }
};

const assertValidAccount = user => {
  if (!user.verified) {
    return res.status(404).json({
      message: messageConstants.AUTH_USER_STATUS_INACTIVE_ERROR
    });
  }
};

export {
  assertValidCredentials,
  assertValidAccount
};