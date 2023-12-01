import axios from "axios";

const instance = axios.create({
  baseURL: 'https://milfolhasserver.onrender.com',
});

// Comidas de cada lista
export const fetchItemsByListId = async (userId, listId) => {
  try {
    const response = await instance.get(`/user/${userId}/list/${listId}/items`);
    const items = response.data;
    return items;
  } catch (error) {
    console.error(error);
    return null;
  }
};