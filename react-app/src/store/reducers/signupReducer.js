export const SIGN_UP = 'SIGN_UP'

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case SIGN_UP:
      return {
        ...state,
        id: action.user.id,
        name: action.user.name,
        username: action.user.username,
        bio: action.user.bio,
        country: action.user.country,
        city: action.user.city,
        profileImageUrl: action.user.profileImageUrl,
        coverImageUrl: action.user.coverImageUrl,
      }
    default:
      return state;
  }
};

export default userReducer;
