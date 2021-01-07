import React, { useEffect } from 'react';
import SearchContainer from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
// import FeaturedTracks from './FeaturedTracks';
import Section from '../home/Section';
import { getTracks } from '../../store/actions/trackActions';
import Signup from "./SignupModal";
import FeaturedArtists from './FeaturedArtists';
// import "./category.js"

const Splash = ({ tracks, authenticated, setAuthenticated }) => {

 return (
   <div>
      <SearchContainer />
      {/* <FeaturedTracks /> */}
      <div className="featured__container">
        <div className="featured__div">
          <Section tracks={tracks.trending} title="Trending" subtitle="What's hot right now."/>
          {/* <Section tracks={tracks} title="Featured Tracks"/> */}
        </div>
      </div>
      <div className="categories__container">
        <span className="category">electronic</span>
        <span className="category">rock</span>
        <span className="category">metal</span>
        <span className="category">hip-hop</span>
        <span className="category">punk</span>
        <span className="category">jazz</span>
        <span className="category">classic</span>
        <span className="category">acoustic</span>
        <span className="category">pop</span>
        <span className="category">folk</span>
      </div>
      <div className="signup__container">
        <h1>Join our community.</h1>
        <p>Listen to tracks, upload your own, and tip your favorite artists.</p>
        <Signup
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </div>
      <FeaturedArtists />
      <div className="filler__div"></div>

      <div className="splash__footer">
        <div className="about-site__container">
          <a className="splash__footer-link" target="_blank"  href="https://github.com/katyeh/busker">Github</a>
        </div>
        <div className="contributors__container">
          <a className="splash__footer-link" target="_blank" href="https://github.com/Alejandro-Larumbe">Alejandro Larumbe</a>
          <a className="splash__footer-link" target="_blank" href="https://github.com/gane11">Aleksandar Dordevic</a>
          <a className="splash__footer-link" target="_blank" href="https://github.com/smilelk4">Yuka Moribe</a>
          <a className="splash__footer-link" target="_blank" href="https://github.com/katyeh/">Kathleen Yeh</a>
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
  }, [dispatch]);
  return (
    <div>
      <Splash tracks={tracks} />
    </div>
  )
}

export default SplashContainer
