import React from 'react';
import Login from "./LoginModal";
import Signup from "./SignupModal";
import logo1 from "../../assets/busker_logo.png";
import logo2 from "../../assets/busker_logo2.png";


const Header = ( {authenticated, setAuthenticated} ) => {
  return (
    <div>
      <div className="header__container">
        <div className="header__logo">
          <img className="header__img1" src={logo1}></img>
          <img className="header__img2" src={logo2}></img>
        </div>
        <div className="header-btn__container">
          <div className="header-btn__wrapper">
            <Login
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </div>
          <div className="header-btn__wrapper">
            <Signup
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
