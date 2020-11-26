import React from 'react';


const Controls = ({isPlaying, setIsPlaying, skipTrack}) => {

  return (
    <div style={style}>
      <i className="fa fa-fast-backward" onClick={() => skipTrack(true)}></i>
      <i className={!isPlaying?"fa fa-play":"fas fa-pause"} onClick={() => setIsPlaying(!isPlaying)}></i>
      <i className="fa fa-fast-forward" onClick={() => skipTrack(false)}></i>
    </div>
  )
}

let style = {
  color:'white',
  display: "flex",
}


export default Controls
