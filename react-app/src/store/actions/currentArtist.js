
export const SET_CURRENT_ARTIST = "SET_CURRENT_ARTIST";

export const setCurrentArtist = (current) => ({ type: SET_CURRENT_ARTIST, current });

export const getOneArtist = (id) => async (dispatch) => {
    const response = await fetch(`/api/artists/${id}`)

    if (response.ok) {
        const current = await response.json();
        dispatch(setCurrentArtist(current));
    }
}


