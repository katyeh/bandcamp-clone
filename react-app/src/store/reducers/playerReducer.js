export const LOAD_ALBUM = 'LOAD_ALBUM'

export const loadAlbum = (album) => ({ type: LOAD_ALBUM, album })


export default function reducer(state = {}, action) {
  switch(action.type) {
    case LOAD_ALBUM: {
      return {
        ...state,
        currentPlaylist: action.album
      }
    }
    default: return state;
  }

}
