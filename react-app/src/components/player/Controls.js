import React from 'react';
import ProgressBar from './ProgressBar'


const Controls = ({isPlaying, setIsPlaying, tracks}) => {

  // const skipTrack = (forwards = true) => {
  //   if (forwards) {
  //     setCurrentTrackIndex(() => {
  //       let idx = currentTrackIndex;
  //       idx++

  //       if (idx > tracks.length - 1) {
  //         idx = 0
  //       }
  //       return idx
  //     });
  //   } else {
  //     setCurrentTrackIndex(() => {
  //       let idx = currentTrackIndex;
  //       idx--;

  //       if (idx < 0) {
  //         idx = tracks.length - 1
  //       }
  //       return idx
  //     })
  //   }
  // }

  return (
    <div style={style}>
        {/* <i className="fa fa-fast-backward" onClick={() => skipTrack(true)}></i> */}
        <i className={!isPlaying?"fa fa-play":"fas fa-pause"} onClick={() => setIsPlaying(!isPlaying)}></i>
        {/* <i className="fa fa-fast-forward" onClick={() => skipTrack(false)}></i> */}
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
