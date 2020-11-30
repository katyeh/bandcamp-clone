export const UPLOAD_TRACK = "UPLOAD_TRACK";

const uploadTrackReducer = (state = {}, action) => {
    switch (action.type) {
        case UPLOAD_TRACK:
            return {
                ...state,
                id: action.id,
                title: action.title,
                lyrics: action.lyrics,
                newTrackUrl: action.mp3_url, 
                albumId: action.album_id,
                artistId: action.artist_id,
            }
        default:
            return state;
    }
};


export default uploadTrackReducer;