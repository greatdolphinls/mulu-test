
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Logo from 'components/Logo';
import CustomDivider from 'components/UI/CustomDivider';
import CustomLink from 'components/UI/Buttons/CustomLink';
import PAGES from 'constants/links/pages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 370,
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  logo: {
    paddingBottom: theme.spacing(2)
  },
  subTitle: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2)
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  footer: {
    fontWeight: 'bold'
  },
  link: {
    fontWeight: 'bold'
  }
}));

const authPageStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(2)
  },
  input: {
    marginBottom: theme.spacing(2.5)
  },
  check: {
    marginBottom: theme.spacing(2.5)
  },
  button: {
    marginBottom: theme.spacing(2.5)
  }
}));

const AuthWrapper = ({ type, data, children }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <div className={classes.container}>
        <Logo
          width={70}
          height={70}
          className={classes.logo}
        />
        <Typography variant='h6' className={classes.subTitle} color='textSecondary'>
          {data[type].subTitle}
        </Typography>
        {children}
        <CustomDivider className={classes.divider} />
        <Typography className={classes.footer} color='textSecondary'>
          {`${data[type].foot.title} `}
          <CustomLink
            className={classes.link}
            color='textPrimary'
            variant='body1'
            href={data[type].foot.linkURL}
          >
            {data[type].foot.linkTitle}
          </CustomLink>
        </Typography>
      </div>
    </main>
  )
}

AuthWrapper.defaultProps = {
  type: 'signIn',
  data: {
    signIn: {
      subTitle: 'Sing In Your Account',
      foot: {
        title: 'Don’t have an account?',
        linkTitle: 'Signup here.',
        linkURL: PAGES.SIGN_UP.url
      }
    },
    signUp: {
      subTitle: 'Sing Up Your Account',
      foot: {
        title: 'Already have an account?',
        linkTitle: 'Login here.',
        linkURL: PAGES.SIGN_IN.url
      }
    },
    forgotPassword: {
      subTitle: 'Send Your Email',
      foot: {
        title: 'Already have an account?',
        linkTitle: 'Login here.',
        linkURL: PAGES.SIGN_IN.url
      }
    },
    resetPassword: {
      subTitle: 'Reset Password of Your Account',
      foot: {
        title: 'Already have an account?',
        linkTitle: 'Login here.',
        linkURL: PAGES.SIGN_IN.url
      }
    }
  }
}

export { authPageStyles };
export default memo(AuthWrapper);