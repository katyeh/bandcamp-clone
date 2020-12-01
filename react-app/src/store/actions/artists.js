export const LOAD_ARTISTS = "LOAD_ARTISTS";
export const LOAD_ARTISTS_FOR_HOME = "LOAD_ARTISTS_FOR_HOME";
export const loadArtists = (artists) => ({ type: LOAD_ARTISTS, artists });

export const getAllArtists = () => async (dispatch) => {
    const res = await fetch(`/api/artists`)

    if (res.ok) {
        const { artists } = await res.json()
        dispatch(loadArtists(artists))
    }

}

export const getArtists = (id) => async (dispatch) => {
  if (!id) {
    const res = await fetch(`/api/artists/home`);

    if (res.ok) {
      const { artists } = await res.json()
      dispatch(loadArtists(artists))
    }
  }
  const res = await fetch(`/api/artists/${id}/home`);


  if (res.ok) {
      const { artists } = await res.json();
      dispatch({
        type: LOAD_ARTISTS_FOR_HOME,
        artists: artists
      });
  }

}
