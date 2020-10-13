import PAGES from './pages';

const authRoutes = [
  PAGES.SIGN_IN.url,
  PAGES.SIGN_UP.url,
  PAGES.FORGOT_PASSWORD.url,
  PAGES.RESET_PASSWORD.url
];

const pageRoutes = [
  PAGES.HOME.url,
  PAGES.AGENT_CONTACT.url
];

const commonRoutes = [ ]

export {
  authRoutes,
  pageRoutes,
  commonRoutes
};
