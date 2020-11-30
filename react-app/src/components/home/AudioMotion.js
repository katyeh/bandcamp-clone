import React, { useRef, useEffect } from 'react';
import AudioMotionAnalyzer from 'audiomotion-analyzer';

const AudioMotion = ({source}) => {
  const container = useRef();
  const audioMotion = new AudioMotionAnalyzer(
    container.current,
    {
      source: source,
      options: {
        height: 1,
        isFullscreen: false
      }
    }
  );

  useEffect(() => {
    console.log('CONNECTED')
    return () => {
      console.log('CLEAN UP')
    }
  });

  return ( 
    <div className="audio-motion">
      <div ref={container} className="audio-motion__container">
        C
      </div>
    </div>
  );
}
 
export default AudioMotion;