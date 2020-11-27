import merge from "lodash/merge";
import { LOAD_ARTISTS } from "../actions/artists";

const artistReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case LOAD_ARTISTS: {
            const artists = action.artists.map((artist) => ({ [artist.id]: artist }));
            return merge({}, state, ...artists)
        }

        default:
            return state
    }
}


export  default artistReducer