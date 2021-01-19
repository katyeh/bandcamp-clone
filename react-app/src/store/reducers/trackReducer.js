export const GET_TRACKS = 'GET_TRACKS';
export const UPDATE_LIKE = 'UPDATE_LIKE';

const trackReducer = (state = [], action) => {
  switch(action.type) {
    case GET_TRACKS:
      return action.tracks;
    case UPDATE_LIKE:
      const i = state.currentTracks && state.currentTracks.tracks.findIndex(track => (
        track.id === action.track_id
      ));
      const newState = [...state];
      newState[i].likes.push(action.like);
      return newState;

    default:
      return state;
  }
};

export default trackReducer;
