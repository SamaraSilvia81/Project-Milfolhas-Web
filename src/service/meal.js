import axios from "axios";

const instance = axios.create({
  baseURL: 'https://milfolhasserver.onrender.com',
});

// Meal - Refeições
export const fetchListas = async (userId) => {
  try {
    const response = await instance.get(`/user/${userId}/lists`);
    console.log("listasBreak", response)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Pega o ID das refições a partir do nome das refeições
export const fetchListIdByName = async (userId, name) => {
  try {
    const response = await instance.get(`/user/${userId}/lists`);
    const lists = response.data;
    const list = lists.find((list) => list.name === name);
    return list ? list.id : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};