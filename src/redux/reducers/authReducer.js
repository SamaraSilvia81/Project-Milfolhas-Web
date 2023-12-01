// reducers/authReducer.js

const initialState = {
  isAuthenticated: false,
  loggedIn: false,
  signIn: false,
  username: null,
  userId: null, // Adicione a propriedade userId ao estado inicial
  error: null,
};
  
export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};
  
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        loggedIn: true,
        username: action.payload.username,
        userId: action.payload.userId, // Defina o userId no estado
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isAuthenticated: false,
        loggedIn: false,
        username: null,
        error: action.payload,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        signIn: true,
        username: action.payload.username,
        error: null,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        signIn: false,
        username: null,
        error: action.payload,
      };
    // Adicione a ação SET_USER_ID para atualizar userId no estado
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.payload, // Corrija para userId
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};
  
export default authReducer;