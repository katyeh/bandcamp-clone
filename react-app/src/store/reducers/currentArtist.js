import { SET_CURRENT_ARTIST } from '../actions/currentArtist'

const currentArtistReducer = (state = null, action) => {
    switch (action.type) {
        case SET_CURRENT_ARTIST: {
            return action.current.artist[0]
        }

        default:
            return state;
    }
}



export default currentArtistReducer 