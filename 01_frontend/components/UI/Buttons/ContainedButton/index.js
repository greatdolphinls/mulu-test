
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

import ButtonLink from 'components/UI/Buttons/ButtonLink';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    color: theme.palette.background.default,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.custom.palette.hover
    },
  },
  disabled: props => ({
    backgroundColor: `${props.color ? theme.palette[props.color].light : theme.palette.primary.light} !important`
  }),
  leftMargin: {
    marginLeft: theme.spacing(1)
  }
}));

const ContainedButton = React.forwardRef(({ className, type, color, href, children, loading, disabled, ...rest }, ref) => {
  const classes = useStyles({color});
  
  return (
    <Button
      ref={ref}
      component={href ? ButtonLink : 'button'}
      href={href}
      className={clsx(className, classes.root)}
      classes={{disabled: classes.disabled}}
      color={color}
      variant='contained'
      type={type}
      disabled={loading || disabled}
      endIcon={loading && (
        <CircularProgress
          color={color === 'primary' ? 'secondary' : 'primary'}
          size={16}
          className={classes.leftMargin} />
      )}
      {...rest}>
      {children}
    </Button>
  );
});

export default memo(ContainedButton);
