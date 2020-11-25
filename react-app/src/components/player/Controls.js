import React from 'react';


const Controls = ({isPlaying, setIsPlaying, skipTrack}) => {
  return (
    <div style={style}>
      <i className="fa fa-fast-backward"></i>
      <i className="fa fa-play" onClick={() => setIsPlaying(!isPlaying)}></i>
      <i className="fa fa-fast-forward"></i>
    </div>
  )
}

let style = {
  color:'white',
  display: "flex",
}


export default Controls
