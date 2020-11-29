import { loadFollowers } from '../reducers/followersReducer'

export const getFollowers = (id) => async (dispatch) => {
    const response = await fetch(`/api/artists/${id}/followers`)
    if (response.ok) {
        const followers = await response.json()
        dispatch(loadFollowers(followers))
    }
}
