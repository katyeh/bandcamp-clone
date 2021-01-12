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
import AwsSliderStyles from 'react-awesome-slider/src/styles.js';

const Header = ( {authenticated, setAuthenticated} ) => {

  const startupScreen = (
    <div>
      <img src={headerImage1} alt="header image 1"/>
    </div>
  );
  
  const slider = (
    <AwesomeSlider
      startupScreen={startupScreen}
      // cssModule={styles}
    >
    
    </AwesomeSlider>
  );

  // const slider = (
  //   <AwesomeSlider animation="cubeAnimation">
  //     <div>
  //   <img src="./busker.png"/>
  // </div>
  //     {/* <div data-src="../../assets/busker_logo2.png" /> */}
  //   </AwesomeSlider>
  // );

  return (
    <AwesomeSlider>
      <div id="header__image1" data-src={headerImage1} alt="header image" />
      <div id="header__image2" data-src={headerImage2} alt="header image" />
      <div id="header__image3" data-src={headerImage3} alt="header image" />
      <div className="header__container">
        <NavLink to='/splash'>
        <div className="header__logo">
          <img alt="" className="header__img1" src={logo1}></img>
          <img alt="" className="header__img2" src={logo2}></img>
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
     </AwesomeSlider>
  )
}

export default Header
