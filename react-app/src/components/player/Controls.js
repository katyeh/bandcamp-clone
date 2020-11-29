import React from 'react';
import { useDispatch } from 'react-redux'
import { play, pause } from '../../store/actions/playerActions'

const Controls = ({isPlaying, setIsPlaying, currentTrackIndex, setCurrentTrackIndex, tracks}) => {
  const dispatch = useDispatch()

  const skipTrack = (forwards = true) => {
    if (forwards && currentTrackIndex < tracks.length - 2) {
      dispatch(setCurrentTrackIndex(currentTrackIndex + 1))
    } else if (!forwards && currentTrackIndex > 0) {
      dispatch(setCurrentTrackIndex(currentTrackIndex - 1))
    }
  }

  return (
    <div style={style}>
        <i className="fa fa-fast-backward" onClick={() => skipTrack(false)}></i>
        <i
          className={!isPlaying?"fa fa-play":"fas fa-pause"}
          onClick={isPlaying?() => dispatch(pause()):() => dispatch(play())}
        ></i>
        <i className="fa fa-fast-forward" onClick={() => skipTrack(true)}></i>
        <i className="fas fa-random"></i>
    </div>
  )
}

let style = {
  padding:'20px',
  color:'white',
  display: "flex",
}


export default Controls
