import React, { useRef } from 'react';
import AudioMotionAnalyzer from 'audiomotion-analyzer';

const AudioMotion = () => {
  const container = useRef();
  const audioMotion = new AudioMotionAnalyzer(
  //   document.getElementById('container'),
  //   {
  //     source: document.getElementById('audio')
  //   }
  );

  return ( 
    <div className="audio-motion">
      <div ref={container} className="audio-motion__container">
        C
      </div>
    </div>
  );
}
 
export default AudioMotion;