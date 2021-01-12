import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from "../../services/auth";
import Modal from "react-modal";

Modal.setAppElement('#root');

const Login = ({ setAuthenticated }) => {
  // console.log(authenticated)
  // console.log(setAuthenticated)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  let history = useHistory();

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // if (authenticated) {
  //   return <Redirect to="/home" />
  // }


  const onDemo = async (e) => {
    e.preventDefault();
    const user = await login('ladygaga@queen.com', 'password');
    if (!user.errors) {
      setAuthenticated(true);
      setIsOpen(false);
      history.push("/")
    } else {
      setErrors(user.errors);
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      setIsOpen(false);
      history.push("/")
    } else {
      setErrors(user.errors);
    }
  };

  return (
    <div>
      <button className="homebutton--login" onClick={() => setIsOpen(true)}>Log in</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Login Modal"
        className="login-modal"
        overlayClassName="modal__overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal__header">
          <h2>Login</h2>
          <button className="modal__close-btn" onClick={() => setIsOpen(false)}>X</button>
        </div>

        <form onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div className="modal__content">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="modal__content">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          <div className="modal__content">
            <button className="modal__btn" type="submit">Login</button>
            <button className="modal__btn" onClick={onDemo} >Demo User</button>

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
