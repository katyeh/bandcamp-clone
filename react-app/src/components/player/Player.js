import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
// import Visualizer from './Visualizer';
import ArtThumbnail from './ArtThumbnail';
import { setCurrentTrack } from '../../store/actions/playerActions'
import AudioMotion from '../home/AudioMotion'


function Player({ tracks, track, currentTrackIndex, isPlaying, source }) {
  const dispatch = useDispatch()
  const audioEl = useRef(null)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [clickedTime, setClickedTime] = useState();


  useEffect(() => {
    console.log(source, 'source!!!')

    if (isPlaying && source) {
      source.play();
    } else if (!isPlaying && source) {
      source.pause();
    }

    console.log('isPlaying', isPlaying)


    if (clickedTime && clickedTime !== currentTime) {
      source.currentTime = clickedTime;
      setClickedTime(null);
    }
  });
  
  if (!source) return null

  // var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // console.log(audioCtx)

  const next = () => {
    if (currentTrackIndex === tracks.length - 1) {
      dispatch(setCurrentTrack(0))
    } else {
      dispatch(setCurrentTrack(currentTrackIndex + 1))
    }
  }

  const handleEnd = () => {
    next()
  }


  return (
    <div style={style} className="player">
      {/* <Visualizer audioElement={audioEl}/> */}
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
  // const [isPlaying, setIsPlaying] = useState(false);
  const currentTrackIndex = useSelector(state => state.player.currentTrackIndex)
  const [tracks, setTracks] = useState()
  const [source, setSource] = useState();
  const [analyzer, setAnalyzer] = useState();


  let trackIndex = useSelector(state => Number(state.player.currentTrackIndex));
  // debugger
  const trackUrl = useSelector(state => {
    if (!state.player.tracksData) return '';
    return state.player.tracksData[trackIndex][Object.keys(state.player
          .tracksData[trackIndex])[0]].mp3_url;
  });
  
  // let audio, context, analyzer, source;
  let sourceRef = useRef();
  let analyzerRef = useRef();
  let audioRef = useRef();
  
  useEffect(() => {
    if (!audioRef.current) {
      // audio = new Audio(audioEl.current.src);

      console.log(sourceRef.current)

      audioRef.current = new Audio();
      audioRef.current.crossOrigin = 'anonymous';
      // const context = new AudioContext();
      // analyzerRef.current = context.createAnalyser();
      
      // sourceRef.current = context.createMediaElementSource(audioRef.current);
      // sourceRef.current.connect(analyzerRef.current);
      // sourceRef.current.src = trackUrl;




      // console.log(sourceRef.current)
      
      // analyzer.connect(context.destination);
      
      // console.log('context destination', context.destination)
      // console.log('audio', audio)
      // console.log('analyzer', analyzer);
      // console.log('context', context)
      // console.log('source', source)
      
      // console.log('isPlaying', isPlaying)
      } else {
        audioRef.current.src = trackUrl;
      }
    }, [trackUrl])
    
    // if (!tracks || !track ) return null;
    
    
    // useEffect(() => {
      //   (async() => {
  //     await setTracks(trackList)
  //   })();

  // })



  // console.log(trackList)
  // const trackId = tracksIdArray[currentTrackIndex]
  // const track = trackList[currentTrackIndex][trackId]
  // const track = tracks[currentTrackIndex][trackId]


  return (
    <>
      <Player
      // track={track}
      tracks={tracks}
      currentTrackIndex={currentTrackIndex}
      isPlaying={isPlaying}
      source={audioRef.current}
      // setIsPlaying={setIsPlaying}
      />
      <AudioMotion audio={audioRef.current} />
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
