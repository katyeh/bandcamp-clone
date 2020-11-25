import { combineReducers } from 'redux';
import userReducer from './signupReducer';

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer;