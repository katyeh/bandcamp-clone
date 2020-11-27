export const LOAD_ERROR = 'LOAD_ALBUM'

const errorReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_ERROR:
      return [action.errors];
    default:
      return state;
  }
};

export default errorReducer;