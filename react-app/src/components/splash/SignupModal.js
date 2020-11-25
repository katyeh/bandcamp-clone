import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import Modal from 'react-modal';
import "./modal.css";

const SignupModal = ({authenticated, setAuthenticated}) => {
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
  const [modalIsOpen, setIsOpen] = useState(false);

  if (authenticated) {
    return <Redirect to="/" />;
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(name,username,email,bio,country,city,profileImageUrl,coverImageUrl,password);
      setIsOpen(false);
      if (!user.errors) {
        setAuthenticated(true);
      }
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
    setProfileImageUrl(e.target.value);
  };

  const updateCoverImageUrl = (e) => {
    setCoverImageUrl(e.target.value);
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

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Sign Up</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Signup Modal"
        className="modal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="login-header">
          <h2>Sign Up</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
        </div>

        <form onSubmit={onSignUp}>
        <div className="login-content">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={updateName}
            value={name}
          ></input>
        </div>
        <div className="login-content">
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="login-content">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="login-content">
          <label>Bio</label>
          <input
            type="text"
            name="bio"
            onChange={updateBio}
            value={bio}
          ></input>
        </div>
        <div className="login-content">
          <label>Country</label>
          <input
            type="text"
            name="country"
            onChange={updateCountry}
            value={country}
          ></input>
        </div>
        <div className="login-content">
          <label>City</label>
          <input
            type="text"
            name="city"
            onChange={updateCity}
            value={city}
          ></input>
        </div>
        <div className="login-content">
          <label>Profile Image</label>
          <input
            type="text"
            name="profile_image"
            onChange={updateProfileImageUrl}
            value={profileImageUrl}
          ></input>
        </div>
        <div className="login-content">
          <label>Cover Image</label>
          <input
            type="text"
            name="cover_image"
            onChange={updateCoverImageUrl}
            value={coverImageUrl}
          ></input>
        </div>
        <div className="login-content">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="login-content">
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="login-content">
          <button type="submit">Sign Up</button>
        </div>
        </form>
      </Modal>
    </div>
  )
}

export default SignupModal;
