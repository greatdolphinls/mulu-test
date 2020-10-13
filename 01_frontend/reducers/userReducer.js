import UserConstants from 'constants/reducerConstants/UserConstants'

const initialState = {
  users: [],
  contacts: [],
  agents: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserConstants.SET_USERS:
      return {
        ...state,
        users: action.payload.data
      };
    case UserConstants.SET_CONTACT_USERS:
      return {
        ...state,
        contacts: action.payload.data
      };
    case UserConstants.SET_AGENT_USERS:
      return {
        ...state,
        agents: action.payload.data
      };
    default:
      return state;
  }
}
