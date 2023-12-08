// actions/listsActions.js

import { fetchListas } from '../../api/user';

export const setLists = (userId) => {
  return async (dispatch) => {
    try {
      const lists = await fetchListas(userId);
      dispatch({ type: 'SET_LISTS', payload: lists });
    } catch (error) {
      console.error(error);
    }
  };
};