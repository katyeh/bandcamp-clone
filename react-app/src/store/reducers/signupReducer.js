export const LOAD_USER = "LOAD_USER";

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case LOAD_USER:
      return {
        ...state,
        id: action.id,
        name: action.name,
        username: action.username,
        email: action.email,
        bio: action.bio,
        country: action.country,
        city: action.city,
        profileImageUrl: action.profile_image_url,
        coverImageUrl: action.cover_image_url,
        tipStach: action.tip_stash,
        dough: action.dough
      }
    default:
      return state;
  }
};


export default userReducer;
