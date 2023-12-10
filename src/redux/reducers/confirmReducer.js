// reducers/confirmReducer.js
const initialState = {
  clientName: '', // Certifique-se de ter isso definido
};

export const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLIENT_NAME':
      return {
        ...state,
        clientName: action.payload,
      };
    default:
      return state;
  }
};