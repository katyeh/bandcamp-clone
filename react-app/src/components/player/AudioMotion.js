import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AudioMotionAnalyzer from 'audiomotion-analyzer';

const AudioMotion = ({audio, analyzer}) => {
  const container = useRef();
  const audioMotionRef = useRef();
  
  useEffect(() => {
    if (!audioMotionRef.current && audio) {
      audioMotionRef.current = new AudioMotionAnalyzer(
        container.current,
        {
          source: audio,
          height: 70,
          width: 400,
          // overlay: true
          mode: 10,
          lineWidth: 2,
          radial: false,
          showPeaks: false,
          fillAlpha: .6,
          reflexAlpha: 1,
          reflexBright: 1,
          reflexRatio: .5,
          showBgColor: true,
          overlay: true,
          bgAlpha: 0
        });
    } 
  }, [audio]);

  return ( 
    <div className="audio-motion">
      <div ref={container} className="audio-motion__container--hidden">
      </div>
    </div>
  );
}
 
export default AudioMotion;
