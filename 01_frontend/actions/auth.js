import Router from 'next/router';

import PAGES from 'constants/links/pages';
import AuthConstants from 'constants/reducerConstants/AuthConstants';
import setAuthToken from 'services/security/setAuthToken';

export const setUserToken = (token, user) => dispatch => {
    localStorage.setItem('token', token);
    setAuthToken(token);
    dispatch(setCurrentUser(user));
};

export const setCurrentUser = decoded => {
    return {
        type: AuthConstants.SET_CURRENT_USER,
        payload: decoded
    };
};

export const editCurrentUserInfo = user => dispatch => {
    dispatch({
        type: AuthConstants.EDIT_CURRENT_USER_INFO,
        payload: user
    });
};

export const logoutUser = history => dispatch => {
    localStorage.clear();
    setAuthToken(false);
    dispatch(setCurrentUser(null));
    Router.push(PAGES.SIGN_IN.url);
};
