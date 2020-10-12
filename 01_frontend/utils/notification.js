import React from 'react';
import { store } from 'react-notifications-component';

import { NotificationContent } from 'components/Notification';

const notification = {
  container: 'top-center',
  insert: 'top',
  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'faster', 'fadeOut'],
  dismiss: {
    duration: 5000,
    onScreen: false,
    pauseOnHover: true,
    waitForAnimation: false,
    showIcon: true,
    click: true,
    touch: true
  }
};

const notifyError = (message) => {
  store.addNotification({
    ...notification,
    content: (<NotificationContent message={message} type={'Error'} />),
    message,
  });
};

const notifyAlert = (message) => {
  store.addNotification({
    ...notification,
    content: (<NotificationContent message={message} type={'Alert'} />),
    message,
  });
};

const notifyInfo = (message) => {
  store.addNotification({
    ...notification,
    content: (<NotificationContent message={message} type={'INFO'} />),
    message,
  });
};

export {
  notifyError,
  notifyAlert,
  notifyInfo
}