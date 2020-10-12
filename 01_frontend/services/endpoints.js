
import urlJoin from 'url-join';

import config from 'config';

const loginPrefix = 'api/login';
const registerPrefix = 'api/register';
const forgotPasswordPrefix = 'api/forgot-password';
const resetPasswordPrefix = 'api/reset-password';
const currentUserPrefix = 'api/current-user';
const usersPrefix = 'api/users';

const getResetPasswordUrl = () => {
  return urlJoin(config.proxyUrl, resetPasswordPrefix);
};

const getForgotPasswordUrl = () => {
  return urlJoin(config.proxyUrl, forgotPasswordPrefix);
};

const getRegisterUrl = () => {
  return urlJoin(config.proxyUrl, registerPrefix);
};

const getLoginUrl = () => {
  return urlJoin(config.proxyUrl, loginPrefix);
};

const getCurrentUserUrl = () => {
  return urlJoin(config.proxyUrl, currentUserPrefix);
}

const getUserUrl = () => {
  return urlJoin(config.proxyUrl, usersPrefix);
}

export {
  getLoginUrl,
  getRegisterUrl,
  getResetPasswordUrl,
  getForgotPasswordUrl,
  getCurrentUserUrl,
  getUserUrl
};
