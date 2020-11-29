import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import FeaturedTracks from './FeaturedTracks';
import Section from '../home/Section';
import { getTracks } from '../../store/actions/trackActions';

const Splash = ({ tracks }) => {
  const [activeClass, setActiveClass] = useState({black: false});

  const changeColor = () => {
    setActiveClass({black: true})
  }
  /* Should render:
    header(with signin/create account buttons),
    banner
    div with app info
    component search bar
    component featured tracks
    component categories
    component sign up
    component featured artists
    component footer with all y'alls info
  */
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
