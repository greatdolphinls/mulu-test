
import { memo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import * as USER_SERVICE from 'services/user';
import LoadingOverlay from 'components/LoadingOverlay';
import ValidatorFormWrapper from 'components/UI/ValidatorFormWrapper';
import OutlinedTextField from 'components/UI/TextFields/OutlinedTextField'
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import formValidatorsConstants from 'constants/formValidators';
import messageConstants from 'constants/message';
import { useForm } from 'utils/hooks';
import { notifyInfo, notifyError } from 'utils/notification';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    marginBottom: theme.spacing(4)
  },
  button: {
    marginBottom: theme.spacing(4)
  }
}));

const UserPasswordPanel = ({ user }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const submitCallback = async () => {
    try {
      setLoading(true)
      const data = {
        _id: user._id,
        password: inputs.password
      }

      await USER_SERVICE.editUser(data);
      setLoading(false)
      notifyInfo(messageConstants.SUCCESS_OPERATION)
      initForm();
    } catch (error) {
      setLoading(false)
      if (error.response) {
        const { status, data: { message } } = error.response;
        notifyError(message)
      }
    }
  };

  const { inputs, initForm, inputChangeHandler, submitHandler } = useForm(submitCallback);

  return (
    <>
      <Typography variant='h6' className={classes.input}>
        Change Password
      </Typography>
      <ValidatorFormWrapper
        password={inputs.password || ''}
        className={classes.root}
        submitHandler={submitHandler}>
        {loading && <LoadingOverlay loading={loading} />}
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
          Change Password
        </ContainedButton>
      </ValidatorFormWrapper>
    </>
  )
}

export default memo(UserPasswordPanel);