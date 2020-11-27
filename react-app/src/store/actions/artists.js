
export const LOAD_ARTISTS = "LOAD_ARTISTS";
export const loadArtists = (artists) => ({ type: LOAD_ARTISTS, artists });

export const getAllArtists = () => async (dispatch) => {
    const res = await fetch(`http://localhost:5000/api/artists`)

    if (res.ok) {
        const { artists } = await res.json()
        dispatch(loadArtists(artists))
    }

}