import React, { useState, useRef, useEffect } from 'react';
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import ArtThumbnail from './ArtThumbnail'



function Player({ currentTrackIndex, setCurrentTrackIndex, tracks }) {
  const audioEl = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [clickedTime, setClickedTime] = useState();


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
        {/* <ArtThumbnail art={tracks.current.}/> */}
      </div>
    </div>
  )
}

const PlayerContainer = (props) => {
  const [tracks, setTracks] = useState([
    {
      'title': 'Best I Ever Head',
      'mp3_url': 'https://busker2.s3.amazonaws.com/songs/drake/Best+I+Ever+Had.mp3',
      'lyrics': '<<URL HERE>>',
      "album_id": 6,
      "artist_id": 2
    },
    {
      'title': 'Farandulera',
      'mp3_url': 'https://busker2.s3.amazonaws.com/songs/maluma/Farandulera+Maluma+Letra.mp3',
      'lyrics': '<<URL HERE>>',
      'album_id': 7,
      'artist_id': 5
    },
    {
      'title': 'vamos a pasarla bien',
      'mp3_url': 'https://busker2.s3.amazonaws.com/songs/maluma/vamos+a+pasarla+bien+maluma+letra.mp3',
      'lyrics': '<<URL HERE>>',
      'album_id': 8,
      'artist_id': 5
    },
    {
      'title': 'Beautiful, Dirty, Rich',
      'mp3_url': 'https://busker2.s3.amazonaws.com/songs/ladygaga/Lady+Gaga+-+Beautiful%2C+Dirty%2C+Rich.mp3',
      'lyrics': '<<URL HERE>>',
      'album_id': 9,
      'artist_id': 6
    }
  ])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);


  return (
    <Player
    currentTrackIndex={currentTrackIndex}
    setCurrentTrackIndex={setCurrentTrackIndex}
    tracks={tracks}
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
