
import { useEffect } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';

import formValidatorsConstants from 'constants/formValidators';

const ValidatorFormWrapper = ({ className, submitHandler, password = '', children }) => {
  useEffect(() => {
    ValidatorForm.addValidationRule(formValidatorsConstants.CONFIRM_PASSWORD.VALIDATOR, value => {
      if (value !== password) {
        return false;
      }
      return true;
    });
    
    return function cleanup () {
      ValidatorForm.addValidationRule(formValidatorsConstants.CONFIRM_PASSWORD.VALIDATOR);
    }
  });

  return (
    <ValidatorForm onSubmit={submitHandler} className={className}>
      {children}
    </ValidatorForm>
  );
};

export default ValidatorFormWrapper;
