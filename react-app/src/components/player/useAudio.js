import React, { useState, useEffect } from 'react'


export default function useAudio( url ) {

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
