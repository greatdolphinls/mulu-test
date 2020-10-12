
import React, { memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 17,
    height: 20,
    marginRight: theme.spacing(1),
    color: theme.palette.primary.light
  }
}));

const InformationIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox = "0 0 450.823 450.823"} {...rest} className={clsx(classes.root, className)}>
      <path d="m225.412 0c-124.29 0-225.412 101.122-225.412 225.412s101.122 225.412 225.412 225.412 225.412-101.122 225.412-225.412-101.122-225.412-225.412-225.412zm0 422.647c-108.763 0-197.235-88.474-197.235-197.235 0-108.763 88.473-197.235 197.235-197.235s197.235 88.473 197.235 197.235c0 108.761-88.473 197.235-197.235 197.235z" />
      <path d="m289.663 118.895c8.253 8.253 8.253 21.633 0 29.886s-21.633 8.253-29.886 0-8.253-21.633 0-29.886 21.634-8.252 29.886 0" />
      <path d="m198.363 334.705c-.619-1.032-1.857-3.756-.151-6.92l68.515-127.248c5.09-9.466 4.43-20.816-1.72-29.621-6.136-8.805-16.647-13.332-27.213-11.818l-70.73 10.098 3.99 27.901 70.854-9.906-68.515 127.234c-5.916 11.006-5.627 23.994.784 34.725s17.693 17.142 30.199 17.142h77.389v-28.176h-77.389c-3.591.001-5.407-2.393-6.013-3.411z" />
    </SvgIcon>
  )
};

export default memo(InformationIcon);