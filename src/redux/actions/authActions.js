import { getUser } from '../../api/user';

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const users = await getUser();

      const foundUser = users.find(
        (user) =>
          user.username === username &&
          user.password === password
      );

      if (foundUser) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { username, userId: foundUser.id } }); // Inclua o userId no payload
      } else {
        dispatch({ type: 'LOGIN_ERROR', payload: 'Invalided Credential' });
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Authentication Error' });
      console.error(error);
    }
  };
};