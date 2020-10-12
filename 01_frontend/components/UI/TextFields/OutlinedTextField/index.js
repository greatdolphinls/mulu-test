
import React, { useState, memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { TextValidator } from 'react-material-ui-form-validator';

import EyeIcon from 'components/Icons/EyeIcon';
import EyeDisableIcon from 'components/Icons/EyeDisableIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  textField: {
    border: 0,
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.custom.palette.lightGrey,
    width: '100%',
    '& fieldset': {
      border: 'none'
    },
    '& input': {
      padding: theme.spacing(1.5)
    }
  },
  inputAdornment: {
    position: 'absolute',
    right: theme.spacing(1)
  },
  label: {
    marginBottom: theme.spacing(1.5),
    fontWeight: 'bold'
  }
}));

const OutlinedTextField = ({ validators, errorMessages, className, value, placeholder, label, limit, type, onChange, readOnly, ...rest }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const mouseDownPasswordHandler = event => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    if (limit) {
      if (value.length > limit) {
        return
      }
    }
    onChange(event)
  }

  return (
    <main className={classes.root}>
      {
        label &&
        <Typography className={classes.label}>
          {label}
        </Typography>
      }
      <TextValidator
        variant='outlined'
        placeholder={placeholder || ''}
        type={showPassword ? 'text' : type}
        value={value}
        disabled={readOnly}
        validators={!readOnly ? validators : null}
        errorMessages={!readOnly ? errorMessages : null}
        className={clsx(className, classes.textField)}
        InputProps={{
          endAdornment: (
            type === 'password' ? (
              <InputAdornment className={classes.inputAdornment} position='end'>
                <IconButton
                  size='small'
                  onClick={showPasswordHandler}
                  onMouseDown={mouseDownPasswordHandler}>
                  {showPassword ?
                    <EyeIcon /> :
                    <EyeDisableIcon />
                  }
                </IconButton>
              </InputAdornment>
            ) : null
          )
        }}
        onChange={onChangeHandler}
        {...rest}
      />
    </main>
  );
}

export default memo(OutlinedTextField);