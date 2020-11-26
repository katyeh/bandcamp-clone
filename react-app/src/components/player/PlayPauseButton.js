import React from 'react';

const PlayPauseButton = ({ playbackStatus, onClick }) => {
  <div onClick={onClick} className={playbackStatus === "Play" ?
  "fas fa-pause"
  :
  "fas fa-play"}/>
}

export default PlayPauseButton
