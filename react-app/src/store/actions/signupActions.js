import { LOAD_USER } from '../reducers/signupReducer';

// export const updateProfilePic = (id, data) => async (dispatch) => {
//   try {
//     const res = await fetch(`/profile_pic/${id}`, {
//       method: 'PUT',
//       body: data
//     }).then(res => res.json())
//   }
//   catch(e) {
//     console.log(e)
//   }
// }

export const signupUser = (user) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: 'POST',
        body: user
      });

      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: LOAD_USER,
          ...data
        });
        localStorage.setItem("user_id", data.id);
        return data;
      }

      return await res.json();
    } catch(e) {
      console.log(e);
    }
  }
}

export const loadUser = (id) => async (dispatch) => {
  const response = await fetch(`/api/artists/${id}`)

  if (response.ok) {
      const data = await response.json();
      dispatch({
        type: LOAD_USER,
        ...data.artist[0]
      });
  }
}
