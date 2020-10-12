
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

const ForgotPassword = () => {
  const classes = authPageStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const submitCallback = async () => {
    try {
      setLoading(true)
      const data = {
        email: inputs.email,
        host: window.location.origin
      }

      const { data: { message } } = await AUTH_SERVICE.forgotPassword(data);
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
    <AuthWrapper type='forgotPassword'>
      {loading && <LoadingOverlay loading={loading} />}
      <ValidatorFormWrapper
        submitHandler={submitHandler}
        className={classes.form}
      >
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
        <ContainedButton
          type='submit'
          color='primary'
          className={classes.button}
        >
          Send Email
        </ContainedButton>
      </ValidatorFormWrapper>
    </AuthWrapper>
  )
}

export default memo(ForgotPassword);