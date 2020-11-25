import { SIGN_UP } from '../reducers/signupReducer';

export const signupUser = (data) => {
  return async dispatch => {
    const res = await fetch(`http://localhost:5000/api/auth/signup`, {
      method: 'POST',
      body: data
    });

    // if (res.ok) {
      console.log(await res.json())
    // }
  }
}