
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import setAuthToken from 'services/security/setAuthToken'
import theme from 'styles/theme';
import Layout from 'hoc/Layout';
import Notification from 'components/Notification';
import commonConstants from 'constants/common';
import PAGES from 'constants/links/pages';
import { pageRoutes, authRoutes } from 'constants/links/routes';
import scrollToTop from 'utils/scrollToTop';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const token = typeof window === 'undefined' ? '' : localStorage.token;

  useEffect(() => {
    document.title = commonConstants.TITLE;
  }, []);

  useEffect(() => {
    setAuthToken(token)
  }, [token])
  
  useEffect(() => {
    if (!!token) {
      if (authRoutes.includes(router.pathname)) {
        router.push(PAGES.HOME.url)
      }
    } else {
      if (pageRoutes.includes(router.pathname)) {
        router.push(PAGES.SIGN_IN.url)
      }
    }
    scrollToTop();
  }, [router]);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
        <meta name='theme-color' content={theme.palette.primary.main} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Notification />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
