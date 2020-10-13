
import { REHYDRATE } from 'redux-persist';

import setAuthToken from 'services/security/setAuthToken';
import AuthConstants from 'constants/reducerConstants/AuthConstants';
import { isEmpty } from 'utils/utility';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REHYDRATE: {
            const token = typeof window === 'undefined' ? '' : localStorage.token;
            setAuthToken(token);
            return state;
        }
        case AuthConstants.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case AuthConstants.EDIT_CURRENT_USER_INFO: {
            const newUser = { ...state.user, ...action.payload };
            return {
                ...state,
                user: newUser
            };
        }
        default:
            return state;
    }
}
