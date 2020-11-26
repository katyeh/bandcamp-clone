import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PlayPauseButton from './PlayPauseButton'
import Controls from './Controls'
import useAudio from './useAudio'



function Player({ track }) {
  const [audioElement, audioProps] = useAudio(track.mp3_url);
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
      <div style={ctStyle}>
        {audioElement}
        <p className = "audio-player-title">
          {track.title}
        </p>
        {audioProps.isLoading ? (
          <div style = {{ color: 'white' }}>Loading...</div>
        ) : (
          <div className="controls">
            <PlayPauseButton
              onClick={audioProps.togglePlaybackStatus}
              playbackStatus={audioProps.playbackStatus}
            />
            {/* <TimeBar
              currentTime={audioProps.currentTime}
              isSeeking={audioProps.isSeeking}
              duration={audioProps.duration}
              progress={audioProps.progress}
              setTime={audioProps.setTime}
            /> */}
          </div>
        )}
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
    track={tracks[currentTrackIndex]}
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

const ctStyle = {
  background: 'white',
  borderRadius: '10px',
  padding: '20px',
  border: "1px solid #e0e0e0",
  maxWidth: '600px',
  margin: '0 auto'
}


export default PlayerContainer;
