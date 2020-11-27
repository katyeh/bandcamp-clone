export const LOAD_ALBUMS = 'LOAD_ALBUMS'

export const loadAlbums = (albums) => ({ type: LOAD_ALBUMS, albums })


export default function reducer(state = {}, action) {
  switch(action.type) {
    case LOAD_ALBUMS: {
      return {
        ...state,
        albums: action.albums
      }
    }
    default: return state;
  }

}
