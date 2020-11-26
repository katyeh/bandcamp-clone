import React from 'react';
import Login from "./LoginModal";
import Signup from "./SignupModal";

const Header = ( {authenticated, setAuthenticated} ) => {
  return (
    <div>
      <Login
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Signup
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
    </div>
  )
}

export default Header
