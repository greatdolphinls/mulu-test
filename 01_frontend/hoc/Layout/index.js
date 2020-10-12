
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopAppBar from 'components/TopAppBar';
import Footer from 'components/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  body: {
    display: 'flex',
    backgroundColor: theme.palette.background.default
  },
  main: {
    flexGrow: 1,
    marginTop: theme.custom.layout.topAppBarHeight,
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <TopAppBar />
        <main className={classes.main}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default memo(Layout);
