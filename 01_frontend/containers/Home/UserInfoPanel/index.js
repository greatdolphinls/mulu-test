
import { memo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import * as USER_SERVICE from 'services/user';
import { editCurrentUserInfo } from 'actions/auth';
import LoadingOverlay from 'components/LoadingOverlay';
import ValidatorFormWrapper from 'components/UI/ValidatorFormWrapper';
import OutlinedTextField from 'components/UI/TextFields/OutlinedTextField'
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import CustomSelect from 'components/UI/CustomSelect';
import commonConstants from 'constants/common';
import formValidatorsConstants from 'constants/formValidators';
import messageConstants from 'constants/message';
import { useForm } from 'utils/hooks';
import { notifyInfo, notifyError } from 'utils/notification';
import { isEmpty } from 'utils/utility';

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

const UserInfoPanel = ({ user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!isEmpty(user)){
      initForm(user)
    }
  }, [user]);

  const submitCallback = async () => {
    try {
      setLoading(true)
      const data = {
        _id: user._id,
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        age: inputs.age,
        gender: inputs.gender,
        zipCode: inputs.zipCode,
        email: inputs.email
      }

      const { data: currentUser } = await USER_SERVICE.editUser(data);
      setLoading(false)
      await dispatch(editCurrentUserInfo(currentUser));
      notifyInfo(messageConstants.SUCCESS_OPERATION)
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
        My Account
      </Typography>
      <ValidatorFormWrapper
        className={classes.root}
        submitHandler={submitHandler}>
        {loading && <LoadingOverlay loading={loading} />}
        <OutlinedTextField
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE]}
          name='firstName'
          label='First Name'
          placeholder='First Name'
          value={inputs.firstName || ''}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        <OutlinedTextField
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE]}
          name='lastName'
          label='Last Name'
          placeholder='Last Name'
          value={inputs.lastName || ''}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        <OutlinedTextField
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE]}
          name='age'
          label='Age'
          placeholder='Age'
          value={inputs.age || ''}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        <OutlinedTextField
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE]}
          name='zipCode'
          label='ZipCode'
          placeholder='ZipCode'
          value={inputs.zipCode || ''}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        <CustomSelect
          name='gender'
          label='Gender'
          value={inputs.gender || ''}
          lists={commonConstants.GENDER_LIST}
          onChange={inputChangeHandler}
          className={classes.input}
        />
        {
          user.role === commonConstants.ROLE.AGENT &&
          <CustomSelect
            name='professions'
            label='Professions'
            value={inputs.professions || ''}
            lists={commonConstants.PROFESSION_LIST}
            onChange={inputChangeHandler}
            className={classes.input}
          />
        }
        <OutlinedTextField
          disabled
          validators={[formValidatorsConstants.REQUIRED.VALIDATOR, formValidatorsConstants.EMAIL.VALIDATOR]}
          errorMessages={[formValidatorsConstants.REQUIRED.ERROR_MESSAGE, formValidatorsConstants.EMAIL.ERROR_MESSAGE]}
          name='email'
          type='email'
          label='Email'
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
          Save
        </ContainedButton>
      </ValidatorFormWrapper>
    </>
  )
}

export default memo(UserInfoPanel);