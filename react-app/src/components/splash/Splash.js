import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import FeaturedTracks from './FeaturedTracks';
import Section from '../home/Section';
import { getTracks } from '../../store/actions/trackActions';
import Signup from "./SignupModal";

const Splash = ({ tracks, authenticated, setAuthenticated }) => {
  const [activeClass, setActiveClass] = useState({black: false});

  const changeColor = () => {
    setActiveClass({black: true})
  }

 let btn_class = activeClass.black ? "blackButton" : "blueButton"
 return (
   <div>
      <SearchBar />
      {/* <FeaturedTracks /> */}
      <div className="featured__container">
        <div className="featured__div">
          <Section tracks={tracks} title="Featured Tracks"/>
        </div>
      </div>
      <div className="categories__container">
        <span className={btn_class} onClick={changeColor}>electronic</span>
        <span>rock</span>
        <span>metal</span>
        <span>hip-hop</span>
        <span>punk</span>
        <span>jazz</span>
        <span>classic</span>
        <span>acoustic</span>
        <span>pop</span>
        <span>folk</span>
      </div>
      <div className="signup__container">
        <h1>Join our community.</h1>
        <p>Listen to tracks, upload your own, and tip your favorite artists.</p>
        <Signup
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </div>
      <div className="featured-artists__container">
        <div className="featured-artists__div">
          <h1>Featured Artists</h1>
        </div>
        <div className="featured-artists__grid">

          <div className="featured-artists__grid-item">
            <div>
              <p>Picture here</p>
            </div>
            <div className="featured-artist__info">
              <h3>Mozart</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque perspiciatis autem omnis!</p>
            </div>
          </div>

          <div className="featured-artists__grid-item">
            <div>
              <p>Picture here</p>
            </div>
            <div className="featured-artist__info">
              <h3>Lady Gaga</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque perspiciatis autem omnis!</p>
            </div>
          </div>

          <div className="featured-artists__grid-item">
            <div>
              <p>Picture here</p>
            </div>
            <div className="featured-artist__info">
              <h3>Blink 182</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque perspiciatis autem omnis!</p>
            </div>
          </div>

          <div className="featured-artists__grid-item">
            <div>
              <p>Picture here</p>
            </div>
            <div className="featured-artist__info">
              <h3>Drake</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque perspiciatis autem omnis!</p>
            </div>
          </div>

        </div>
      </div>
      <div className="filler__div"></div>

      <div class="splash__footer">
        <div className="about-site__container">
          <a href="">About Us</a>
          <a href="https://github.com/katyeh/busker">Github</a>
        </div>
        <div className="contributors__container">
          <a href="https://github.com/Alejandro-Larumbe">Alejandro Larumbe</a>
          <a href="https://github.com/gane11">Aleksandar Dordevic</a>
          <a href="https://github.com/smilelk4">Yuka Moribe</a>
          <a href="https://github.com/katyeh/">Kathleen Yeh</a>
        </div>
      </div>

    </div>
  )
}

const SplashContainer = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.tracks);

  useEffect(() => {
    dispatch(getTracks());
  }, []);
  return (
    <div>
      <Splash tracks={tracks} />
    </div>
  )
}

export default SplashContainer
