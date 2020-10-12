
import { memo, useState } from 'react';
import { useRouter } from 'next/router';

import * as AUTH_SERVICE from 'services/auth';
import LoadingOverlay from 'components/LoadingOverlay';
import ValidatorFormWrapper from 'components/UI/ValidatorFormWrapper';
import OutlinedTextField from 'components/UI/TextFields/OutlinedTextField'
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import AuthWrapper, { authPageStyles } from '../Shared/AuthWrapper';
import PAGES from 'constants/links/pages';
import formValidatorsConstants from 'constants/formValidators';
import { useForm } from 'utils/hooks';
import { notifyInfo, notifyError } from 'utils/notification';

const SignUp = () => {
  const classes = authPageStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const submitCallback = async () => {
    try {
      setLoading(true)
      const data = {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password,
        host: window.location.origin
      }

      const { data: { message } } = await AUTH_SERVICE.register(data);
      setLoading(false)
      notifyInfo(message)
      router.push(PAGES.SIGN_IN.url);
    } catch (error) {
      setLoading(false)
      if (error.response) {
        const { status, data: { message } } = error.response;
        notifyError(message)
      }
    }
  };

  const { inputs, inputChangeHandler, submitHandler } = useForm(submitCallback);

  return (
    <AuthWrapper type='signUp'>
      {loading && <LoadingOverlay loading={loading} />}
      <ValidatorFormWrapper
        password={inputs.password || ''}
        className={classes.form}
        submitHandler={submitHandler}>
        <OutlinedTextField
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE]}
          name='firstName'
          placeholder='First Name'
          value={inputs.firstName || ''}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        <OutlinedTextField
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE]}
          name='lastName'
          placeholder='Last Name'
          value={inputs.lastName || ''}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        <OutlinedTextField
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR, formValidatorsConstants.EMAIL.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE, formValidatorsConstants.EMAIL.ERROR_MESSAGE]}
          name='email'
          type='email'
          placeholder='email'
          value={inputs.email || ''}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        <OutlinedTextField
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR, formValidatorsConstants.STRONG_PASSWORD.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE, formValidatorsConstants.STRONG_PASSWORD.ERROR_MESSAGE]}
          name='password'
          type='password'
          placeholder='Password'
          value={inputs.password || ''}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        <OutlinedTextField
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR, formValidatorsConstants.CONFIRM_PASSWORD.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE, formValidatorsConstants.CONFIRM_PASSWORD.ERROR_MESSAGE]}
          name='confirmPassword'
          type='password'
          placeholder='Re-enter Password'
          value={inputs.confirmPassword || ''}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        <ContainedButton
          type='submit'
          color='primary'
          className={classes.button}
        >
          Signup
        </ContainedButton>
      </ValidatorFormWrapper>
    </AuthWrapper>
  )
}

export default memo(SignUp);