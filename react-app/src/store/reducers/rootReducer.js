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
import likes from './likeReducer'

const DESTROY_SESSION = "DESTROY_SESSION"
export const destroySessionAction = () => ({
  type: DESTROY_SESSION
})

const appReducer = combineReducers({
  album,
  user,
  player,
  tracks,
  errors,
  currentArtist:  currentArtistReducer,
  artists: artistReducer,
  currentTracks,
  currentAlbums,
  followers,
  likes,
});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
