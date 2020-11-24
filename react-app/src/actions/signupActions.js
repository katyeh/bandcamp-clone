import { SIGN_UP } from '../reducers/signupReducer';

export const signupUser = (data) => {
  return async dispatch => {
    const res = await fetch(`http://localhost:5000/api/artists`, {
      method: 'POST',
      body: data
    });

    // if (res.ok) {
      console.log(res.json())
    // }
  }
}