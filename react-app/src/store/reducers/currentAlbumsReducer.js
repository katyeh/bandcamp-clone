export const LOAD_CURRENT_ALBUMS = 'LOAD_CURRENT_ALBUMS'

export const loadAlbums = (albums) => ({ type: LOAD_CURRENT_ALBUMS, albums })



export default function reducer(state = {}, action) {
    switch (action.type) {
        case LOAD_CURRENT_ALBUMS: {
            return {
                ...state,
                albums: action.albums
            }
        }
        default: return state;
    }

}