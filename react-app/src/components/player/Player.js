import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import { setCurrentTrack } from '../../store/actions/playerActions'
import AudioMotion from './AudioMotion'
import Details from './Details'

function Player({ tracks, currentTrackIndex, isPlaying, track }) {
  const [clickedTime, setClickedTime] = useState();
  const dispatch = useDispatch()
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ audio, setAudio ] = useState()

  const audioRef = useRef();

  const handleEnd = () => {
    const nextIndex = parseInt(currentTrackIndex) + 1;
    if (tracks && nextIndex > tracks.length - 1) {
      dispatch(setCurrentTrack(0))
    } else {
      dispatch(setCurrentTrack(nextIndex))
    }
  };

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.crossOrigin = 'anonymous';
    }
    if (track) {
      audioRef.current.src = track.mp3_url;
      setAudio(audioRef.current)
    }
  }, [track])


  useEffect(() => {
    if (isPlaying && audio) {
      audio.play();
      audio.onloadedmetadata = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime)
      };
      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime);
      };
      audio.onended = handleEnd;

    } else if (!isPlaying && audio) {
      audio.pause();
    }

    if (clickedTime && clickedTime !== currentTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }
  }, [audio, clickedTime, currentTime, isPlaying, currentTrackIndex]);

  return (
    <div className="player">
      <div className='controls'>
        </div> */}
        <Controls className='buttons'
          isPlaying={isPlaying}
          currentTrackIndex={currentTrackIndex}
          setCurrentTrack={setCurrentTrack}
          tracks={tracks}
        />
        <ProgressBar currentTime={currentTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)} />
      </div>
      <AudioMotion audio={audio} />
      <Details track={track} />

    </div>
  )
}

const PlayerContainer = () => {
  const trackList = useSelector(state => state.player.tracksData)
  const isPlaying = useSelector(state => state.player.isPlaying)
  const trackIndex = useSelector(state => Number(state.player.currentTrackIndex))

  if (!trackList) return null

  return (
    <>
      <Player
        track={trackList[trackIndex]}
        tracks={trackList}
        currentTrackIndex={trackIndex}
        isPlaying={isPlaying}
      />
    </>
  )
}

export default PlayerContainer;
