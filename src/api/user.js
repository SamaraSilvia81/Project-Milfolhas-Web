// user.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://milfolhasserver.onrender.com',
});

export const fetchUser = async (username, password, dispatch) => {
  try {
    const response = await instance.post('/user/login', { username, password });
    const userId = response.data.id;

    // Despachar uma ação para armazenar o userId no estado do Redux
    dispatch({ type: 'SET_USER_ID', payload: userId });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};