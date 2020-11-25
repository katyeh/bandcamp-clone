import { combineReducers } from 'redux';
import userReducer from './signupReducer';
import player from './playerReducer'
const rootReducer = combineReducers({
  user: userReducer,
  player
})

export default rootReducer;
