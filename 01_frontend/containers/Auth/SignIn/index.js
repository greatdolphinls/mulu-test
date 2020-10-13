
import { useState, memo } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import * as AUTH_SERVICE from 'services/auth';
import { setUserToken } from 'actions/auth';
import LoadingOverlay from 'components/LoadingOverlay';
import ValidatorFormWrapper from 'components/UI/ValidatorFormWrapper';
import OutlinedTextField from 'components/UI/TextFields/OutlinedTextField'
import CustomCheckbox from 'components/UI/CustomCheckbox';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import CustomLink from 'components/UI/Buttons/CustomLink';
import AuthWrapper, { authPageStyles } from '../Shared/AuthWrapper';
import PAGES from 'constants/links/pages';
import formValidatorsConstants from 'constants/formValidators';
import { notifyError } from 'utils/notification';
import { useForm } from 'utils/hooks';

const SignIn = () => {
  const classes = authPageStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const submitCallback = async () => {
    try {
      setLoading(true)
      const data = {
        email: inputs.email,
        password: inputs.password,
        remember
      }

      const { data: { token, user } } = await AUTH_SERVICE.login(data);
      await dispatch(setUserToken(token, user));
      setLoading(false)
      router.push(PAGES.HOME.url);
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
    <AuthWrapper>
      {loading && <LoadingOverlay loading={loading} />}
      <ValidatorFormWrapper
        className={classes.form}
        submitHandler={submitHandler}>
        <OutlinedTextField
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR, formValidatorsConstants.EMAIL.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE, formValidatorsConstants.EMAIL.ERROR_MESSAGE]}
          name='email'
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
        <CustomCheckbox
          value={remember}
          onChange={(event) => { setRemember(event.target.checked) }}
          className={classes.check}
          label={<Typography color='textSecondary'>Remember me</Typography>}
        />
        <ContainedButton
          type='submit'
          color='primary'
          className={classes.button}
        >
          Login
        </ContainedButton>
        <CustomLink
          className={classes.forgotPassword}
          color='textSecondary'
          variant='body1'
          href={PAGES.FORGOT_PASSWORD.url}
        >
          Forgot password?
        </CustomLink>
      </ValidatorFormWrapper>
    </AuthWrapper>
  )
}
export default memo(SignIn);