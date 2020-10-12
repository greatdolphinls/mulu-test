
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(4)
  },
  grid: {
    margin: 0,
    width: '100%'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <div className={classes.container}>
        Home Page
      </div>
    </main>
  )
}

export default memo(Home);