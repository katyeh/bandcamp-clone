import { GET_TRACKS } from '../reducers/trackReducer';

export const getTracks = (user) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/tracks`);
  
      if (res.ok) {
        const data = await res.json();
        return dispatch({
          type: GET_TRACKS,
          tracks: data
        })
      }

      return await res.json();

    } catch(e) {
      console.log(e);
    }
  }
}