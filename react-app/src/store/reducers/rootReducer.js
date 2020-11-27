import { combineReducers } from 'redux';
import user from './signupReducer';
import player from './playerReducer'
import tracks from './trackReducer'

const rootReducer = combineReducers({
  user,
  player,
  tracks
})

export default rootReducer;
