import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import ArtThumbnail from './ArtThumbnail';



// function Player({ currentTrackIndex, setCurrentTrackIndex, track }) {
//   const audioEl = useRef(null)
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [clickedTime, setClickedTime] = useState();

//   // console.log(audioEl)

//   useEffect(() => {
//     if (isPlaying) {
//       audioEl.current.play();
//     } else {
//       audioEl.current.pause();
//     }

//     if (clickedTime && clickedTime !== currentTime) {
//       audioEl.current.currentTime = clickedTime;
//       setClickedTime(null);
//     }
//   });

//   return (
//     <div style={style} className="player">
//       <audio
//         id='audio'
//         src={track.mp3_url}
//         ref={audioEl}
//         onLoadedData={() => {
//           setDuration(audioEl.current.duration);
//           setCurrentTime(audioEl.current.currentTime)
//         }}
//         onTimeUpdate={() => {
//           setCurrentTime(audioEl.current.currentTime);
//         }}
//       />
//       <div className='controls'>
//         <Controls className='buttons'
//           isPlaying={isPlaying}
//           setIsPlaying={setIsPlaying}
//           currentTrackIndex={currentTrackIndex}
//           setCurrentTrackIndex={setCurrentTrackIndex}
//           track={track}
//         />
//         <ProgressBar currentTime={currentTime} duration={duration} onTimeUpdate={(time) =>setClickedTime(time)}/>
//       </div>
//     </div>
//   )
// }

const PlayerContainer = (props) => {
  const music = useSelector(state => state.player.playingNow)
  const [track, setTrack] = useState()
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    setTrack(music)
  },[music])

  if(!track) return null



  return (
    <h1>Player</h1>
    // <Player
    // currentTrackIndex={currentTrackIndex}
    // setCurrentTrackIndex={setCurrentTrackIndex}
    // track={track}
    // />
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
