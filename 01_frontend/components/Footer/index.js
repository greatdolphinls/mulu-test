
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: theme.spacing(2.5, 2.5, 3, 2.5),
    borderTop: `1px solid ${theme.custom.palette.lightGreen}`,
    backgroundColor: theme.palette.background.default,
    zIndex: theme.zIndex.drawer - 1,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div>
        <Typography variant='caption' color='textSecondary'>
          © CopyRight 2020 All Right Reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default memo(Footer);
