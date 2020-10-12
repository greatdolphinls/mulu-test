
import { memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 1,
    backgroundColor: theme.custom.palette.lightGrey
  }
}));

const CustomDivider = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Divider
      className={clsx(className, classes.root)}
      {...rest}
    />
  );
};

export default memo(CustomDivider);
