import React from 'react';
import SearchBar from './SearchBar';
import FeaturedTracks from './FeaturedTracks';


const Splash = () => {
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
  return (
    <div>
      <h1>Splash</h1>
      <div>Banner image goes here.</div>
      <SearchBar />
      <FeaturedTracks />
    </div>
  )
}

const SplashContainer = () => {
  return (
    <Splash
    />
  )
}

export default SplashContainer
