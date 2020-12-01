import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import ArtThumbnail from './ArtThumbnail';
import { setCurrentTrack } from '../../store/actions/playerActions'
import AudioMotion from './AudioMotion'


function Player({ tracks, track, currentTrackIndex, isPlaying, audio, currentTime, duration }) {
  const [clickedTime, setClickedTime] = useState();


  useEffect(() => {
    if (isPlaying && audio) {
      audio.play();
    } else if (!isPlaying && audio) {
      audio.pause();
    }

    if (clickedTime && clickedTime !== currentTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }
  });

  if (!audio) return null


  return (
    <div style={style} className="player">
      {/* <div
        id='audio'
        ref={audioEl}
        onLoadedData={() => {
          setDuration(audioEl.current.duration);
          setCurrentTime(audioEl.current.currentTime)
        }}
        onTimeUpdate={() => {
          setCurrentTime(audioEl.current.currentTime);
        }}
        onEnded={handleEnd}
      /> */}
      {/* <audio
        id='audio'
        // src={track.mp3_url}
        src="https://elasticbeanstalk-us-east-2-183201666743.s3.us-east-2.amazonaws.com/Blink_FreakScene.mp3"
        ref={audioEl}
        // controls
        crossOrigin='anonymous'
        onLoadedData={() => {
          setDuration(audioEl.current.duration);
          setCurrentTime(audioEl.current.currentTime)
        }}
        onTimeUpdate={() => {
          setCurrentTime(audioEl.current.currentTime);
        }}
        onEnded={handleEnd}
      />  */}

      <div className='controls'>
        <Controls className='buttons'
          isPlaying={isPlaying}
          // setIsPlaying={setIsPlaying}
          currentTrackIndex={currentTrackIndex}
          setCurrentTrack={setCurrentTrack}
          tracks={tracks}
        />
        <ProgressBar currentTime={currentTime} duration={duration} onTimeUpdate={(time) =>setClickedTime(time)}/>

      </div>
    </div>
  )
}

const PlayerContainer = () => {
  const trackList = useSelector(state => state.player.tracksData)
  const tracksIdArray = useSelector(state => state.player.tracksIds)
  const isPlaying = useSelector(state => state.player.isPlaying)
  const currentTrackIndex = useSelector(state => state.player.currentTrackIndex)
  const [tracks, setTracks] = useState();

  const dispatch = useDispatch()
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const trackIndex = useSelector(state => Number(state.player.currentTrackIndex));
  const trackUrl = useSelector(state => {
    if (!state.player.tracksData) return '';
    return state.player.tracksData[trackIndex][Object.keys(state.player
          .tracksData[trackIndex])[0]].mp3_url;
  });

  const next = () => {
    if (currentTrackIndex === tracks.length - 1) {
      dispatch(setCurrentTrack(0))
    } else {
      dispatch(setCurrentTrack(currentTrackIndex + 1))
    }
  }

  const handleEnd = () => {
    next()
  };

  const audioRef = useRef();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.crossOrigin = 'anonymous';
      audioRef.current.onLoadedData=() => {
        setDuration(audioRef.current.duration);
        setCurrentTime(audioRef.current.currentTime)
      };
      audioRef.current.TimeUpdate=() => {
        setCurrentTime(audioRef.current.currentTime);
      };
      audioRef.current.onEnded = handleEnd;
      } else {
        audioRef.current.src = trackUrl;
      }
    }, [trackUrl])

  return (
    <>
      <Player
      // track={track}
      tracks={tracks}
      currentTrackIndex={currentTrackIndex}
      isPlaying={isPlaying}
      audio={audioRef.current}
      currentTime={currentTime}
      duration={duration}
      />
      {/* <AudioMotion audio={audioRef.current} /> */}
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
