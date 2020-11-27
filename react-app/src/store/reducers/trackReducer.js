export const GET_TRACKS = 'GET_TRACKS'

const trackReducer = (state = [], action) => {
  switch(action.type) {
    case GET_TRACKS:
      return [...action.tracks.tracks];
    default:
      return state;
  }
};

export default trackReducer;
