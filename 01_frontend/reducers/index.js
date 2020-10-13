
import { combineReducers } from 'redux';

import authReducer from 'reducers/authReducer';
import loadingReducer from 'reducers/loadingReducer';

export default combineReducers({
  auth: authReducer,
  loading: loadingReducer
});