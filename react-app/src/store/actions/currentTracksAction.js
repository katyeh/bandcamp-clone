import { loadTracks } from '../reducers/currentTracksReducer'

export const getTracks = (id) => async (dispatch) => {
    const response = await fetch(`/api/artists/${id}/tracks`)
    if (response.ok) {
        const tracks = await response.json()
        dispatch(loadTracks(tracks))
    }
}
