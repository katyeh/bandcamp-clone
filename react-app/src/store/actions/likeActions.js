import { GET_LIKES, ADD_LIKE, DELETE_LIKE } from '../reducers/likeReducer';

export const getLikes = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`/api/tracks/${id}/likes`)
      const likes = await res.json();
      if (res.ok) {
        return dispatch({ type: GET_LIKES, ...likes })
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export const addLike = (track_id, artist_id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`/api/tracks/${track_id}/likes`, {
        method: 'POST',
        body: JSON.stringify({ artist_id })
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: ADD_LIKE, like: data });
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const deleteLike = (track_id, artist_id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`/api/tracks/${track_id}/artist/${artist_id}`, {
        method: 'DELETE',
        headers: {'Accept':'application/json',
        'Content-Type': 'application/json'
      }
      });
      if (res.ok) {
        const data = await res.json();
        const like_id = data.id
        return dispatch({ type: DELETE_LIKE, id: like_id })
      }
    } catch(e) {
      console.log(e);
    }
  }
};
