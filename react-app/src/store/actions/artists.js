
export const LOAD_ARTISTS = "LOAD_ARTISTS";
export const loadArtists = (artists) => ({ type: LOAD_ARTISTS, artists });

export const getAllArtists = () => async (dispatch) => {
    const res = await fetch(`/api/artists`)

    if (res.ok) {
        const { artists } = await res.json()
        dispatch(loadArtists(artists))
    }

}

export const getRecommendedArtists = (id) => async (dispatch) => {
  if (!id) {
    console.log('NONOOO')
    const res = await fetch(`/api/artists/home`);

    if (res.ok) {
      const { artists } = await res.json()
      dispatch(loadArtists(artists))
    }

  }

  console.log('YESSS')
  const res = await fetch(`/api/artists/${id}/home`);

  console.log(await res.json(), '!!!!!!:)')

  if (res.ok) {
      // const { artists } = await res.json()
      // dispatch(loadArtists(artists))
  }

}