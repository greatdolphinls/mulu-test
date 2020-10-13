
import UserConstants from 'constants/reducerConstants/UserConstants'
import * as USER_SERVICE from 'services/user';

export const setUsers = refresh => async (dispatch, getState) => {
  try {
    const { user: { users = [] } } = getState();

    if (refresh || users.length === 0) {
      const { data } = await USER_SERVICE.getUsers();

      let contacts = []
      let agents = []

      for(const user of data) {

      }

      dispatch({
        type: UserConstants.SET_USERS,
        payload: { data }
      });
    }
  } catch (error) {
    console.log('[Actions user setUsers] error => ', error);
  }
}
