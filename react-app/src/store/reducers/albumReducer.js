export const LOAD_ALBUMS = 'LOAD_ALBUMS' ;
export const LOAD_ALBUM = 'LOAD_ALBUM';

export default function reducer(state = [], action) {
  Object.freeze(state);

  switch(action.type) {
    case LOAD_ALBUMS: {
      return {
        ...state,
        albums: action.albums
      }
    }
    case LOAD_ALBUM: {
      return {
        ...state,
        album: action.album
      }
    }

    default: return state;
  }
}
