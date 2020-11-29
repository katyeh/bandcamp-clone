import { combineReducers } from 'redux';
import user from './signupReducer';
import player from './playerReducer'
import tracks from './trackReducer'
import errors from './errorReducer'
import artistReducer from './artist'
import album from './albumReducer';
import currentArtistReducer from './currentArtist'
import currentTracks from './currentTracksReducer'
import currentAlbums from './currentAlbumsReducer'
import followers from './followersReducer'

const rootReducer = combineReducers({
  album,
  user,
  player,
  tracks,
  errors,
  currentArtist:  currentArtistReducer,
  artists: artistReducer,
  currentTracks,
  currentAlbums,
  followers
});

export default rootReducer;
