
import React, { memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
    color: theme.custom.palette.darkYellow
  }
}));

const AlertIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox = "0 0 512 512"} {...rest} className={clsx(classes.root, className)}>
      <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667 C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667z" />
      <path d="M256,85.333c-5.896,0-10.667,4.771-10.667,10.667v256c0,5.896,4.771,10.667,10.667,10.667s10.667-4.771,10.667-10.667V96 C266.667,90.104,261.896,85.333,256,85.333z" />
      <circle cx="256" cy="416" r="10.667" />
    </SvgIcon>
  )
};

export default memo(AlertIcon);