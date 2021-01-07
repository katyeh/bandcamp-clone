import { UPDATE_PROFILE_IMAGE, UPDATE_COVER_IMAGE } from '../reducers/updatePhotoReducer';


export const updateProfileImage = (formData, id) => {
    return async dispatch => {
        try {
            const res = await fetch(`/api/artists/${id}/profile_image`, {
                method: 'PUT',
                body: formData
            });
            if (res.ok) {
                const user = await res.json();
                dispatch({ type: UPDATE_PROFILE_IMAGE, user: user })
            }
        } catch (e) {
            console.log(e)
        }
    }
};

export const updateCoverImage = (formData, id) => {
    return async dispatch => {
        try {
            const res = await fetch(`/api/artists/${id}/cover_image`, {
                method: 'PUT',
                body: formData
            });
            if (res.ok) {
                const user = await res.json()
                dispatch({ type: UPDATE_COVER_IMAGE, user: user })
            }
        } catch (e) {
            console.log(e);
        }
    }
}