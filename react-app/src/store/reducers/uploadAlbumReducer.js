export const UPLOAD_ALBUM = "UPLOAD_ALBUM";

const uploadAlbumReducer = (state = {}, action) => {
    switch (action.type) {
        case UPLOAD_ALBUM:
            return {
                ...state,
                id: action.id,
                title: action.title,
                newAlbumCover: action.album_art_url,
                single: action.single,
                artistId: action.artist_id,
            }
        default:
            return state;
    }
};


export default uploadAlbumReducer;