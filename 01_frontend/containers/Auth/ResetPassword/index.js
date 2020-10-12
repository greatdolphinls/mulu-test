
import { memo, useState } from 'react';
import { useRouter } from 'next/router';

import * as AUTH_SERVICE from 'services/auth';
import LoadingOverlay from 'components/LoadingOverlay';
import ValidatorFormWrapper from 'components/UI/ValidatorFormWrapper';
import OutlinedTextField from 'components/UI/TextFields/OutlinedTextField'
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import AuthWrapper, { authPageStyles } from '../Shared/AuthWrapper';
import formValidatorsConstants from 'constants/formValidators';
import PAGES from 'constants/links/pages';
import { useForm } from 'utils/hooks';
import { notifyInfo, notifyError } from 'utils/notification';

const ResetPassword = () => {
  const classes = authPageStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const submitCallback = async () => {
    try {
      setLoading(true)
      const data = {
        resetPasswordToken: router.query.token,
        password: inputs.password
      }

      const { data: { message } } = await AUTH_SERVICE.resetPassword(data);
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
    <AuthWrapper type='resetPassword'>
      {loading && <LoadingOverlay loading={loading} />}
      <ValidatorFormWrapper
        password={inputs.password || ''}
        submitHandler={submitHandler}
        className={classes.form}
      >
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
          Reset Password
        </ContainedButton>
      </ValidatorFormWrapper>
    </AuthWrapper>
  )
}

export default memo(ResetPassword);