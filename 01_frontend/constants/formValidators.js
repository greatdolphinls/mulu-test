
const FORM_VALIDATORS = {
  REQUIRED: {
    VALIDATOR: 'required',
    ERROR_MESSAGE: 'This field can not be empty'
  },
  EMAIL: {
    VALIDATOR: 'isEmail',
    ERROR_MESSAGE: 'Email is not valid'
  },
  STRONG_PASSWORD: {
    VALIDATOR: 'matchRegexp:[0-9a-zA-Z\\d!@#$%^&*]{6,}',
    ERROR_MESSAGE: 'Use 6 or more characters with mix of letters, numbers & symbols'
  },
  CONFIRM_PASSWORD: {
    VALIDATOR: 'isPasswordMatch',
    ERROR_MESSAGE: 'Password does not match'
  }
};

export default FORM_VALIDATORS;