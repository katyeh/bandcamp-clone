import { GET_TRACKS } from '../reducers/trackReducer';
import { LOAD_ERROR } from '../reducers/errorReducer';

export const getTracks = (user) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/tracks/`);
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