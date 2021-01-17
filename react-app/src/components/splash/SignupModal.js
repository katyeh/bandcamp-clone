import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../store/actions/signupActions';
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';

const SignupModal = ({authenticated, setAuthenticated}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();
    let user = new FormData();
    user.append('name', name);
    user.append('username', username);
    user.append('email', email);
    user.append('password', password);
    user.append('repeat_password', repeatPassword);
    user = await dispatch(signupUser(user));

    if (user && !user.errors) {
      setAuthenticated(true);
      history.push("/");
    } else {
      setErrors(user.errors);
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
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
    <>
      <button className="button--signup" onClick={() => setIsOpen(true)}>
        Create account
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Signup Modal"
        className="modal modal--signup"
        overlayClassName="modal__overlay"
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={500}
      >
        <div className="modal__header">
          <h2>Sign Up</h2>
          <div className="modal__close-btn" onClick={() => setIsOpen(false)}>
            <CloseIcon style={{fontSize: 30}} />
          </div>
        </div>

        <div className="modal__error-container">
            {errors.map((error) => (
              <div className="modal__error" key={error.id}>{error}</div>
            ))}
        </div>

        <form className="modal__form" onSubmit={onSignUp}>
          <div className="modal__content">
            <input
              type="text"
              name="name"
              onChange={updateName}
              value={name}
              required={true}
              autoCapitalize="words"
              placeholder="Name"
            ></input>
          </div>
          <div className="modal__content">
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
              required={true}
              placeholder="Username"
            ></input>
          </div>
          <div className="modal__content">
            <input
              type="email"
              name="email"
              onChange={updateEmail}
              value={email}
              required={true}
              placeholder="Email"
            ></input>
          </div>
          <div className="modal__content">
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
              required={true}
              placeholder="Password"
            ></input>
          </div>
          <div className="modal__content">
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder="Confirm Password"
            ></input>
          </div>
          <div className="modal__btn-container">
            <button className="modal__btn" type="submit">Sign Up</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default SignupModal;
