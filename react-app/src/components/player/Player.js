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
  });

  if (!tracks || !track ) return null

  // var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // console.log(audioCtx)

  const next = () => {
    const nextIndex = parseInt(currentTrackIndex) + 1
    if (nextIndex >  tracks.length - 1){
      dispatch(setCurrentTrack(0))
    } else {
      dispatch(setCurrentTrack(nextIndex))
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
        onEnded={next}
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
  const currentTrackIndex = useSelector(state => state.player.currentTrackIndex)
  const [tracks, setTracks] = useState()


  useEffect(() => {
    (async() => {
      await setTracks(trackList)
    })()

  })

  if(!tracks ) return null
  console.log('----------------------------------------')
  console.log(tracksIdArray, currentTrackIndex, tracks)
  const trackId = tracksIdArray[currentTrackIndex]
  const track = tracks[currentTrackIndex][trackId]


  return (
    <>
    <Player
    track={track}
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
  zIndex: "99",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export default PlayerContainer;
