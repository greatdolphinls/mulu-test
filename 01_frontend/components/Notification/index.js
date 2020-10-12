
import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import CancelIcon from 'components/Icons/CancelIcon';
import CloseIcon from 'components/Icons/CloseIcon';
import AlertIcon from 'components/Icons/NotificationIcons/AlertIcon';
import InformationIcon from 'components/Icons/NotificationIcons/InformationIcon';

const iconChangeHandler = (type) => {
  switch (type) {
    case 'INFO':
      return <InformationIcon />
    case 'Error':
      return < CancelIcon />
    case 'Alert':
      return < AlertIcon />
    default:
      return null;
  }
};

const useStyles = makeStyles(theme => ({
  container: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    '& .notification-container-top-center': {
      width: 'max-content',
      left: 'unset'
    }
  },
  content: props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    minHeight: 56,
    background: theme.palette.text.primary,
    color: theme.palette.background.primary,
    borderRadius: theme.spacing(3 / 8),
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 4.5, 2, 2),
    userSelect: 'none',
    marginTop: theme.spacing(0),
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all'
  }),
  closeIcon: {
    position: 'absolute',
    top: theme.spacing(0.8),
    right: theme.spacing(1.5),
    width: theme.spacing(2),
    height: theme.spacing(2)
  }
}));

export const NotificationContent = ({ message, type }) => {
  const classes = useStyles({ type });

  return (
    <div className={classes.content}>
      {iconChangeHandler(type)}
      {message}
      <CloseIcon className={classes.closeIcon} />
    </div>
  );
};

const Notification = ({ language, ...rest }) => {
  const classes = useStyles();

  return (
    <ReactNotification
      className={classes.container}
      {...rest}
    />
  );
}

export default memo(Notification);