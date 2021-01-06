export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';
export const UPDATE_COVER_IMAGE = 'UPDATE_COVER_IMAGE';

const updatePhotoReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_IMAGE:
            return {
                user: action.user
            }
        case UPDATE_COVER_IMAGE:
            return {
                user: action.user
            }
        default:
            return state;
    };
};

export default updatePhotoReducer;