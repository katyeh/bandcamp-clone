export const LOAD_ALBUM = 'LOAD_ALBUM'
export const LOAD_TRACK = 'LOAD_TRACK'
export const LOAD_PLAYING_LIST = 'LOAD_PLAYING_LIST'


export default function reducer(state = {}, action) {
  Object.freeze(state);

  switch(action.type) {
    case LOAD_ALBUM: {
      return {
        ...state,
        playingNow: action.album
      }
    }
    // case LOAD_PLAYING_LIST: {
    //   return {
    //     ...state,
    //     playingNow: action.album
    //   }
    // }
    case LOAD_TRACK: {
      return {
        ...state,
        playingNow: action.track
      }
    }
    default: return state;
  }

}
