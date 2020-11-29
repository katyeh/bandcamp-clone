import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
// import Visualizer from './Visualizer';
import ArtThumbnail from './ArtThumbnail';
import { setCurrentTrack } from '../../store/actions/playerActions'



function Player({ tracks, track, currentTrackIndex, isPlaying }) {
  const dispatch = useDispatch()
  const audioEl = useRef(null)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [clickedTime, setClickedTime] = useState();


  useEffect(() => {
    if (isPlaying && audioEl.current) {
      audioEl.current.play();
    } else if (!isPlaying && audioEl.current) {
      audioEl.current.pause();
    }


    if (clickedTime && clickedTime !== currentTime) {
      audioEl.current.currentTime = clickedTime;
      setClickedTime(null);
    }
  }, [currentTrackIndex, isPlaying, audioEl]);

  if (!tracks || !track ) return null

  // var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // console.log(audioCtx)

  const next = () => {
    if (currentTrackIndex === tracks.length - 1) {
      dispatch(setCurrentTrack(0))
    } else {
      dispatch(setCurrentTrack(currentTrackIndex + 1))
    }
  }

  const handleEnd = () => {
    next()
  }


  return (
    <div style={style} className="player">
      {/* <Visualizer audioElement={audioEl}/> */}
      <audio
        id='audio'
        src={track.mp3_url}
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
          currentTrackIndex={currentTrackIndex}
          setCurrentTrack={setCurrentTrack}
          tracks={tracks}
        />
        <ProgressBar currentTime={currentTime} duration={duration} onTimeUpdate={(time) =>setClickedTime(time)}/>
      </div>
    </div>
  )
}

const PlayerContainer = (props) => {
  const trackList = useSelector(state => state.player.tracksData)
  const tracksIdArray = useSelector(state => state.player.tracksIds)
  const isPlaying = useSelector(state => state.player.isPlaying)
  const currentTrackIndex = useSelector(state => state.player.currentIndex)

  const [tracks, setTracks] = useState()


  useEffect(() => {
    (async() => {
      await setTracks(trackList)
    })()

  },[trackList, currentTrackIndex, isPlaying, currentTrackIndex])

  if(!tracks) return null

  const trackId = tracksIdArray[currentTrackIndex]


  return (
    <>
    {/* <h1>{tracks}</h1> */}
    <Player
    track={tracks[currentTrackIndex][trackId]}
    tracks={tracks}
    currentTrackIndex={currentTrackIndex}
    isPlaying={isPlaying}
    />
    </>
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
