// reducers/index.js
import { combineReducers } from 'redux';

import authReducer from './reducers/authReducer';
import listsReducer from './reducers/listReducer';

import { confirmReducer } from './reducers/confirmReducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  lists: listsReducer,
  confirm: confirmReducer, // Use o nome correto do reducer aqui
  cart: cartReducer,
});

export default rootReducer;