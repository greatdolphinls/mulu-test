
import { ROLE } from 'constants/common';
import UserConstants from 'constants/reducerConstants/UserConstants'
import * as USER_SERVICE from 'services/user';

export const setUsers = refresh => async (dispatch, getState) => {
  try {
    const { user: { users = [] } } = getState();

    if (refresh || users.length === 0) {
      const { data } = await USER_SERVICE.getUsers();

      let contacts = []
      let agents = []

      for (const user of data) {
        if (user.role === ROLE.AGENT) {
          agents = [
            ...agents,
            user
          ]
        }

        if (user.role === ROLE.CONTACT) {
          contacts = [
            ...contacts,
            user
          ]
        }
      }

      dispatch({
        type: UserConstants.SET_USERS,
        payload: { data }
      });

      dispatch({
        type: UserConstants.SET_AGENT_USERS,
        payload: { data: agents }
      });
      
      dispatch({
        type: UserConstants.SET_CONTACT_USERS,
        payload: { data: contacts }
      });
    }
  } catch (error) {
    console.log('[Actions user setUsers] error => ', error);
  }
}
