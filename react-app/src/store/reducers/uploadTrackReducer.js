export const UPLOAD_TRACK = "UPLOAD_TRACK";

const uploadTrackReducer = (state = {}, action) => {
    switch (action.type) {
        case UPLOAD_TRACK:
            return {
                ...state,
                id: action.id,
                track_title: action.track_title,
                lyrics: action.lyrics,
                mp3_url: action.mp3_url, 
                album_id: action.album_id,
                artist_id: action.artist_id,
            }
        default:
            return state;
    }
};


export default uploadTrackReducer;