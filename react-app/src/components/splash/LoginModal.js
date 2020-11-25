import React, { useState } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { login } from "../../services/auth";
import Modal from "react-modal";
import "./modal.css";

Modal.setAppElement('#root');

const Login = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  let history = useHistory();

  function openModal() {
    setIsOpen(true);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // if (authenticated) {
  //   return <Redirect to="/home" />
  // }

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      debugger
      setIsOpen(false);
      history.push("/home")
    } else {
      setErrors(user.errors);
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Login</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Login Modal"
        className="modal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="login-header">
          <h2>Login</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
        </div>

        <form onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div className="login-content">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="login-content">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          <div className="login-content">
            <button className="login-btn" type="submit">Login</button>
          </div>
          </div>
        </form>

      </Modal>
    </div>

    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/login" exact={true} activeClassName="active">
    //         Sign In
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/sign-up" exact={true} activeClassName="active">
    //         Create account
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default Login
