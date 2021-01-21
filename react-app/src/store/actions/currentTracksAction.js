import { loadTracks } from '../reducers/currentTracksReducer'

export const getTracks = (id) => async (dispatch) => {
    const response = await fetch(`/api/artists/${id}/tracks`)
    if (response.ok) {
        const tracks = await response.json()
        dispatch(loadTracks(tracks))
    }
}


export const like = (track_id, user_id, artist_id ) => async dispatch => {
    try {
      const res = await fetch(`/api/tracks/${track_id}/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ artist_id: user_id })

      });
      if (res.ok) {
        dispatch(getTracks(artist_id))
        // return dispatch({type: GET_TRACKS, ...data});
        return 'success'
      }
    } catch(e) {
      console.log(e)
    }
  }

  export const unLike = (like_id, artist_id) => async dispatch => {
    try {
      const res = await fetch(`/api/tracks/${like_id}/likes`, {
        method: 'DELETE',
      });
      if (res.ok) {
          dispatch(getTracks(artist_id))
        // const data = await res.json();
        return 'succress'
      }
    } catch(e) {
      console.log(e)
    }

  }
