import axios from "axios";

import {
  getRegisterUrl,
  getLoginUrl,
  getForgotPasswordUrl,
  getResetPasswordUrl,
  getCurrentUserUrl
} from "./endpoints";

const register = async data => {
  const url = getRegisterUrl();
  const result = await axios.post(url, data);
  return result;
};

const login = async data => {
  const url = getLoginUrl();
  const result = await axios.post(url, data);
  return result;
};

const forgotPassword = async data => {
  const url = getForgotPasswordUrl();
  const result = await axios.post(url, data);
  return result;
};

const resetPassword = async data => {
  const url = getResetPasswordUrl();
  const result = await axios.post(url, data);
  return result;
};

const getCurrentUser = async () => {
  const url = getCurrentUserUrl()
  const result = await axios.get(url)
  return result
}

export {
  login,
  register,
  resetPassword,
  forgotPassword,
  getCurrentUser
};
