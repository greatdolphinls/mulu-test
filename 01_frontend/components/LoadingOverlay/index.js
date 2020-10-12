
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LoadingSpinner from './LoadingSpinner';

const useStyles = makeStyles(theme => ({
  root: props => ({
    position: 'absolute',
    width: '100%',
    height: props.height ? props.height : '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: props.zIndex || 5
  })
}));

const LoadingOverlay = ({ loading, zIndex, height, size }) => {
  const classes = useStyles({ height, zIndex });
  return (
    <div className={classes.root}>
      <LoadingSpinner
        loading={loading}
        size={size} />
    </div>
  );
};

export default LoadingOverlay;