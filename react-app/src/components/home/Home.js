import React from 'react';
import Player from '../player/Player'

const Home = ({ currentTrackIndex, setCurrentTrackIndex, tracks }) => {
  return (
    <>
      <h1>Home Page</h1>
      <Player
      currentTrackIndex={currentTrackIndex}
      setCurrentTrackIndex={setCurrentTrackIndex}
      tracks={tracks}
      />
    </>
  )
}

export default Home;
