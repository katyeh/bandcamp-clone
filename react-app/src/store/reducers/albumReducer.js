export const LOAD_ALBUMS = 'LOAD_ALBUMS' ;

export default function reducer(state = [], action) {
  Object.freeze(state);

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
