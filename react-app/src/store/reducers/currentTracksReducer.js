export const LOAD_TRACKS = 'LOAD_TRACKS'

export const loadTracks = (tracks) => ({ type: LOAD_TRACKS, tracks })


export default function reducer(state = {}, action) {
    switch (action.type) {
        case LOAD_TRACKS: {
            return {
                ...state,
                tracks: action.tracks
            }
        }
        default: return state;
    }

}