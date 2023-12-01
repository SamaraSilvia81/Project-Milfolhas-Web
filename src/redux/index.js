import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import listReducer from './reducers/listReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  lists: listReducer,
});

export default rootReducer;