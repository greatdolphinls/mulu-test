
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  picture: {
    display: 'flex'
  },
  img: props => ({
    width: props.width,
    height: props.height || 'auto'
  })
}));

const Logo = ({ width, height, className, ...rest }) => {
  const classes = useStyles({width, height});

  return (
    <picture className={clsx(classes.picture, className)} {...rest}>
      <source srcSet='/assets/images/logo/webp/logo.webp 600w, /assets/images/logo/webp/logo@2x.webp 960w, /assets/images/logo/webp/logo@3x.webp 1280w' type='image/webp' />
      <source srcSet='/assets/images/logo/png/logo.png 600w, /assets/images/logo/png/logo@2x.png 960w, /assets/images/logo/png/logo@3x.png 1280w' type='image/png' />
      <img
        className={classes.img}
        width='100%'
        src='/assets/images/placeholder.gif'
        alt='logo' />
    </picture>
  );
};

export default memo(Logo);
