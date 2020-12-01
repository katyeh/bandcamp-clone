import { UPLOAD_ALBUM } from '../reducers/uploadAlbumReducer';

export const uploadNewAlbum = (album) => {
    return async dispatch => {
        try {
            const res = await fetch(`/api/albums`, {
                method: 'POST',
                body: album
            });

            if (res.ok) {
                const data = await res.json();
                dispatch({
                    type: UPLOAD_ALBUM,
                    ...data
                });
                return data;
            }

            return await res.json();
        } catch (e) {
            console.log(e);
        }
    }
}