import { SIGN_UP } from '../reducers/signupReducer';

export const signupUser = (user) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: 'POST',
        body: user
      });
  
      if (res.ok) {
        const data = await res.json();
        return data;
      }

      return await res.json();

    } catch(e) {
      console.log(e);
    }
  }
}