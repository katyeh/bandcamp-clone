import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import { signupUser } from '../../actions/signupActions';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = new FormData();
      data.append('name', name);
      data.append('username', username);
      data.append('bio', bio);
      data.append('country', country);
      data.append('city', city);
      data.append('profileImageUrl', profileImageUrl);
      data.append('coverImageUrl', coverImageUrl);
      data.append('email', email);
      data.append('password', password);

      dispatch(signupUser(data))
      // const user = await signUp(name,username,email,bio,country,city,profileImageUrl,coverImageUrl,password);
      // if (!user.errors) {
      //   setAuthenticated(true);
      // }
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updateCountry = (e) => {
    setCountry(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };
  const updateProfileImageUrl = (e) => {
    setProfileImageUrl(e.target.files[0]);
  };

  const updateCoverImageUrl = (e) => {
    setCoverImageUrl(e.target.files[0]);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={updateName}
          value={name}
        ></input>
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Bio</label>
        <input
          type="text"
          name="bio"
          onChange={updateBio}
          value={bio}
        ></input>
      </div>
      <div>
        <label>Country</label>
        <input
          type="text"
          name="country"
          onChange={updateCountry}
          value={country}
        ></input>
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          onChange={updateCity}
          value={city}
        ></input>
      </div>
      <div>
        <label>Profile Image</label>
        <input
          type="file"
          name="profile_image"
          onChange={updateProfileImageUrl}
        ></input>
      </div>
      <div>
        <label>Cover Image</label>
        <input
          type="file"
          name="cover_image"
          onChange={updateCoverImageUrl}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
