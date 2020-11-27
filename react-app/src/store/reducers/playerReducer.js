export const PLAYING_QUEUE = 'NOW_PLAYING'

export const loadTrackList = (tracks) => ({ type: PLAYING_QUEUE, tracks })


export default function reducer(state = {}, action) {
  switch(action.type) {
    case PLAYING_QUEUE: {
      return {
        ...state,
        currentPlaylist: action.playingQueue
      }
    }
    default: return state;
  }
};
