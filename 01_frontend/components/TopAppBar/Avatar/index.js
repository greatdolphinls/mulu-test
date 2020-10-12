
import React, { memo, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ArrowIcon from '@material-ui/icons/KeyboardArrowDown'

import AvatarDownMenu from './AvatarDownMenu';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '&:hover': {
      cursor: 'pointer'
    },
  },
  avatar: {
    width: theme.spacing(7.5),
    height: theme.spacing(7.5),
    margin: theme.spacing(0, 0.5, 0, 1)
  },
  arrowIcon: {
    color: theme.palette.text.primary,
    width: theme.spacing(4.5),
    height: theme.spacing(4),
    '&:hover': {
      transform: 'scale(1.25)',
      cursor: 'pointer'
    },
    '&:active': {
      transform: 'scale(1)'
    }
  }
}));

const AvatarItem = ({ user }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, [anchorEl]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [anchorEl]);

  return (
    <>
      <div className={classes.root} onClick={handleClick}>
        <Avatar
          src={'/assets/images/avatar/default.png'}
          className={classes.avatar} />
        <ArrowIcon className={classes.arrowIcon} />
      </div>
      <AvatarDownMenu 
        anchorEl={anchorEl} 
        onClose={handleClose} 
        user={user}  
      />
    </>
  );
};

export default memo(AvatarItem);
