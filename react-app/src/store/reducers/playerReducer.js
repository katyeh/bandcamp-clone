export const LOAD_ALBUMS = 'LOAD_ALBUMS'
export const LOAD_PLAYING_LIST = 'LOAD_PLAYING_LIST'

export const loadAlbums = (albums) => ({ type: LOAD_ALBUMS, albums })
export const loadPlayingList = (album) => ({ type: LOAD_PLAYING_LIST, album})


export default function reducer(state = {}, action) {
  switch(action.type) {
    case LOAD_ALBUMS: {
      return {
        ...state,
        albums: action.albums
      }
    }
    case LOAD_PLAYING_LIST: {
      return {
        ...state,
        playingList: action.album
      }
    }
    default: return state;
  }

}
