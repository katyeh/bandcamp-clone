import { GET_TRACKS } from '../reducers/trackReducer';
import { LOAD_ERROR } from '../reducers/errorReducer';

export const getTracks = (user) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/tracks/home`);
      const data = await res.json();

      if (res.ok) {
        return dispatch({type: GET_TRACKS, ...data});
      }

      return dispatch({type: LOAD_ERROR, ...data});

    } catch(e) {
      console.log(e);
    }
  }
}

export const like = (UserId, trackId) => async dispatch => {
  try {
    const res = await fetch(`/api/tracks/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        "track_id": trackId,
        "artist_id": UserId
      }
    });
    if (res.ok) {
      const data = await res.json();
      return data
    }
  } catch(e) {
    console.log(e)
  }
}

export const unLike = (likeId) => async dispatch => {
  try {
    const res = await fetch(`/likes/${likeId}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      const data = await res.json();
      return data
    }
  } catch(e) {
    console.log(e)
  }

}
