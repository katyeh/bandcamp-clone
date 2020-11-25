import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Controls from './Controls'
// import Details from './Details'



function Player({ currentTrackIndex, setCurrentTrackIndex, nextTrackIndex, tracks }) {
  const audioEl = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  })

  const skipTrack = (forwards = true) => {
    if (forwards) {
      setCurrentTrackIndex(() => {
        let idx = currentTrackIndex;
        idx++

        if (idx > tracks.length - 1) {
          idx = 0
        }
        return idx
      });
    } else {
      setCurrentTrackIndex(() => {
        let idx = currentTrackIndex;
        idx--;

        if (idx < 0) {
          idx = tracks.length - 1
        }
        return idx
      })
    }

    return (
      <div style={style}>
        <audio src={tracks[currentTrackIndex].mp3_url} ref={audioEl}></audio>
        <h4>Playing now</h4>
        {/* <Details track={tracks[currentTrackIndex]} /> */}
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          skipTrack={skipTrack}
        />
      </div>
    )
  }

}

const PlayerContainer = (props) => {

  return (
    <Player {...props}
    />
  )
}

let style = {
  position: "absolute",
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
