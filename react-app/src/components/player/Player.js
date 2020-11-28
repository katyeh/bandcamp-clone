import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import ArtThumbnail from './ArtThumbnail';



function Player({ tracks, currentTrackIndex, setCurrentTrackIndex }) {
const audioEl = useRef(null)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [clickedTime, setClickedTime] = useState();
  const [isPlaying, setIsPlaying] = useState(true);


  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }


    if (clickedTime && clickedTime !== currentTime) {
      audioEl.current.currentTime = clickedTime;
      setClickedTime(null);
    }
  });

  if (!tracks) return null

  const next = () => {
    if (currentTrackIndex === tracks.length - 1) {
      setCurrentTrackIndex(0)
    } else {
      setCurrentTrackIndex(currentTrackIndex + 1)
    }
  }

  const handleEnd = () => {
    next()
  }


  return (
    <div style={style} className="player">
      <audio
        id='audio'
        src={tracks[currentTrackIndex].mp3_url}
        ref={audioEl}
        onLoadedData={() => {
          setDuration(audioEl.current.duration);
          setCurrentTime(audioEl.current.currentTime)
        }}
        onTimeUpdate={() => {
          setCurrentTime(audioEl.current.currentTime);
        }}
        onEnded={handleEnd}
      />
      <div className='controls'>
        <Controls className='buttons'
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentTrackIndex={currentTrackIndex}
          setCurrentTrackIndex={setCurrentTrackIndex}
          tracks={tracks}
        />
        <ProgressBar currentTime={currentTime} duration={duration} onTimeUpdate={(time) =>setClickedTime(time)}/>
      </div>
    </div>
  )
}

const PlayerContainer = (props) => {
  const trackList = useSelector(state => state.player.playingNow)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const [tracks, setTracks] = useState()


  useEffect(() => {
    setTracks(trackList)
  },[trackList])

  if(!tracks) return null



  return (
    <Player
    tracks={tracks}
    currentTrackIndex={currentTrackIndex}
    setCurrentTrackIndex={setCurrentTrackIndex}
    />
  )
}

let style = {
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "80px",
  background: "#282828",
  // zIndex: "99",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export default PlayerContainer;
