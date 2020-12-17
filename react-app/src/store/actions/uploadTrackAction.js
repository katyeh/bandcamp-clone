import { UPLOAD_TRACK } from '../reducers/uploadTrackReducer';

export const uploadNewTrack = (track) => {
    return async dispatch => {
        try {
            const res = await fetch(`/api/tracks/`, {
                method: 'POST',
                body: track
            });

            if (res.ok) {
                const data = await res.json();
                dispatch({
                    type: UPLOAD_TRACK,
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