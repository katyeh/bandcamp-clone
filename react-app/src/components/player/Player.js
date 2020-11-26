import React, { useState, useRef, useEffect } from 'react';
import Controls from './Controls'



// function Player({ currentTrackIndex, setCurrentTrackIndex, tracks }) {

function useAudio( url ) {

  const audioRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackStatus, setPlaybackStatus] = useState('pause');
  const [isLoading, setLoading] = useState(true);
  const [isSeeking, setSeeking] = useState(false)

  useEffect(() => {
    setLoading(true);
  }, [url])



  return (
      <audio
        onLoadedData={() => {
          setPlaybackStatus('pause');
          setLoading(false);
          setDuration(audioRef.current.duration);
        }}
        onSeeking={() => setSeeking(true)}
        onSeeked={() => setSeeking(false)}
        src={url}
        ref={audioRef}
        onTimeUpdate={() => {
          setCurrentTime(audioRef.current.currentTime);
        }}
        hidden
      />,
      {
        currentTime,
        duration,
        playbackStatus,
        isSeeking,
        isLoading,
        progress: (currentTime / duration) * 100,
        setTime: seconds => {
            audioRef.current.currentTime = seconds;
        },
        togglePlaybackStatus: () => {
          if (playbackStatus === 'play') {
            audioRef.current.pause();
            setPlaybackStatus('pause');
          }
          if (playbackStatus === 'pause') {
            audioRef.current.play()
          }

        }
      }

  )
}

// const PlayerContainer = (props) => {
//   const [tracks, setTracks] = useState([
//     {
//       'title': 'Best I Ever Head',
//       'mp3_url': 'https://busker2.s3.amazonaws.com/songs/drake/Best+I+Ever+Had.mp3',
//       'lyrics': '<<URL HERE>>',
//       "album_id": 6,
//       "artist_id": 2
//     },
//     {
//       'title': 'Farandulera',
//       'mp3_url': 'https://busker2.s3.amazonaws.com/songs/maluma/Farandulera+Maluma+Letra.mp3',
//       'lyrics': '<<URL HERE>>',
//       'album_id': 7,
//       'artist_id': 5
//     },
//     {
//       'title': 'vamos a pasarla bien',
//       'mp3_url': 'https://busker2.s3.amazonaws.com/songs/maluma/vamos+a+pasarla+bien+maluma+letra.mp3',
//       'lyrics': '<<URL HERE>>',
//       'album_id': 8,
//       'artist_id': 5
//     },
//     {
//       'title': 'Beautiful, Dirty, Rich',
//       'mp3_url': 'https://busker2.s3.amazonaws.com/songs/ladygaga/Lady+Gaga+-+Beautiful%2C+Dirty%2C+Rich.mp3',
//       'lyrics': '<<URL HERE>>',
//       'album_id': 9,
//       'artist_id': 6
//     }
//   ])
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);


//   return (
//     <Player
//     currentTrackIndex={currentTrackIndex}
//     setCurrentTrackIndex={setCurrentTrackIndex}
//     tracks={tracks}
//     />
//   )
// }

// let style = {
//   position: "absolute",
//   bottom: "0",
//   left: "0",
//   width: "100%",
//   height: "80px",
//   background: "#282828",
//   // zIndex: "99",
//   padding: "0 20px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }

export default useAudio;
