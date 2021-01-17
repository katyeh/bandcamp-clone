import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from "./LoginModal";
import Signup from "./SignupModal";
import logo1 from "../../assets/busker_logo.png";
import logo2 from "../../assets/busker_logo2.png";
import headerImage1 from "../../assets/busker_header.jpeg";
import headerImage2 from "../../assets/busker_header2.jpeg";
import headerImage3 from "../../assets/busker_header3.jpeg";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/src/styles.js';

const Header = ( {authenticated, setAuthenticated} ) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <div className="header__container">
        <NavLink to='/splash'>
          <div className="header__logo">
            <img alt="header image 1" className="header__img1" src={logo1}></img>
            <img alt="header image 2" className="header__img2" src={logo2}></img>
          </div>
        </NavLink>
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

      <AutoplaySlider play={true} interval={3000}>
        <div id="header__image1" data-src={headerImage1} alt="header image" />
        <div id="header__image2" data-src={headerImage2} alt="header image" />
        <div id="header__image3" data-src={headerImage3} alt="header image" />
      </AutoplaySlider>
    </>
  )
}

export default Header
