
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import CustomDivider from 'components/UI/CustomDivider'
import UserInfoPanel from './UserInfoPanel';
import UserPasswordPanel from './UserPasswordPanel';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    width: 370,
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(4)
  },
}));

const Home = () => {
  const classes = useStyles();
  const { user = {} } = useSelector(state => state.auth, {});

  return (
    <main className={classes.root}>
      <div className={classes.container}>
        {
          !isEmpty(user) &&
          <>
            <UserInfoPanel user={user} />
            <CustomDivider />
            <UserPasswordPanel user={user} />
          </>
        }
      </div>
    </main>
  )
}

export default memo(Home);