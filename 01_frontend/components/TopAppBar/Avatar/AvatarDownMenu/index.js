
import React, { memo } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import SignOutIcon from '@material-ui/icons/ExitToAppRounded';

import { logoutUser } from 'actions/auth';
import CustomDivider from 'components/UI/CustomDivider';
import PAGES from 'constants/links/pages';

const useStyles = makeStyles(theme => ({
  root: {},
  paper: {
    borderRadius: 0,
    width: 240,
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.primary
  },
  menuItem: {
    padding: theme.spacing(1.5, 3),
    transition: 'ease-out 0.4s',
    '&:hover': {
      color: theme.custom.palette.hover,
      transform: 'translateY(-3px)',
      transition: 'ease-out 0.4s',
    }
  },
  title: {
    paddingLeft: theme.spacing(2.5)
  },
  role: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(0.25, 0.5),
    color: theme.palette.background.default,
    backgroundColor: theme.custom.palette.green
  },
  divider: {
    margin: theme.spacing(1, 0)
  }
}));

const menuItems = [
  {
    title: PAGES.HOME.title,
    icon: <HomeIcon />,
    link: PAGES.HOME.url
  }
];

const socialItems = [
  {
    title: PAGES.SIGN_OUT.title,
    icon: <SignOutIcon />,
    link: PAGES.SIGN_OUT.url
  }
];

const AvatarDownMenu = ({ anchorEl, onClose }) => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const menuHandler = (link) => () => {
    if (link === PAGES.SIGN_OUT.url){
      dispatch(logoutUser());
      return;
    }

    router.push(link);
    onClose();
  }

  return (
    <Menu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
      classes={{ paper: classes.paper }}
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {
        menuItems.map(item =>
          <MenuItem
            key={item.title}
            className={classes.menuItem}
            onClick={menuHandler(item.link)}
          >
            {item.icon}
            <Typography variant='body1' className={classes.title}>
              {item.title}
            </Typography>
          </MenuItem>
        )
      }
      <CustomDivider className={classes.divider} />
      {
        socialItems.map(item =>
          <MenuItem
            key={item.title}
            className={classes.menuItem}
            onClick={menuHandler(item.link)}
          >
            {item.icon}
            <Typography variant='body1' className={classes.title}>
              {item.title}
            </Typography>
          </MenuItem>
        )
      }
    </Menu>
  );
};

export default memo(AvatarDownMenu);