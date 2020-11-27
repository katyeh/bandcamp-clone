import { combineReducers } from 'redux';
import user from './signupReducer';
import player from './playerReducer'
import tracks from './trackReducer'
import errors from './errorReducer'
import artistReducer from './artist'
import currentArtistReducer from './currentArtist'

const rootReducer = combineReducers({
  user,
  player,
  tracks,
  errors
  currentArtist:  currentArtistReducer,
  artists: artistReducer,
});

export default rootReducer;
