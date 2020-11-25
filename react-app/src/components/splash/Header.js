import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { login } from "../../services/auth";
import Modal from "react-modal";
import Login from "./LoginModal";
import Signup from "./SignupModal";

const Header = ( {authenticated, setAuthenticated} ) => {
  return (
    <div>
      <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Signup authenticated={authenticated} setAuthenticated={setAuthenticated} />
    </div>
  )
}

export default Header
