import { combineReducers } from 'redux';
import userReducer from './signupReducer';
import player from './playerReducer'
import artistReducer from './artist'
import currentArtistReducer from './currentArtist'

const rootReducer = combineReducers({
  user: userReducer,
  artists: artistReducer,
  currentArtist:  currentArtistReducer,
  player
})

export default rootReducer;
