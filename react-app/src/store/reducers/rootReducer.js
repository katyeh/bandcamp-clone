import { combineReducers } from 'redux';
import user from './signupReducer';
import player from './playerReducer'
import tracks from './trackReducer'
import errors from './errorReducer'

const rootReducer = combineReducers({
  user,
  player,
  tracks,
  errors
})

export default rootReducer;
