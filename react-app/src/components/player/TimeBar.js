import React from react;
import { useDrag } from 'react-use-gesture';
import { directstyled, useDirectStyle } from 'direct-styled'
import { useEffect } from 'react';

function formatTime(seconds) {
  return [Math.floor(seconds / 60),
    Math.floor(seconds % 60)]
    .map(x => x.toString())
    .map(x => (x.length === 1 ? `0${x}`:x))
    .join(":");
}
const minMax = (min, max, value) => {
  if (value > max) {
    return max
  }
  if (value < min) {
    return min
  }
  return value
}
function getNewTimeProps(barRect, clientX, duration) {
  const seconds = minMax(
    0,
    duration,
    Math.floor(((clientX - barRect.left) / barRect.width) * duration )
  );
  const progress = (seconds / duration) * 100;
  return { seconds, progress };
}
function TimeBar({
  className,
  duration,
  progress, currentTime,
  isSeeking,
  setTime
}) {
  const barRef = React.useRef(null);
  const [barStyle, setBarStyle] = useDirectStyle();
  const [circleStyle, setCircleStyle] = useDirectStyle();
  const [ignoreTimeUpdates, setIgnoreTimeUpdates] = useState(false);

  function setStyles(progress) {
    setCircleStyle({
      left: `${progress}`
    })
    setBarStyle({
      background: `linear-gradient`(to right, #FF8E9E 0%, #FF8E9E ${progress}%, #B2B4C1 ${progress}%, #B2B4C1 100%)
    })
  }
  const bind = useDrag(
    ({ xy, first, last, event }) => {
      event.preventDefault();
      if (first) {
        setIgnoreTimeUpdates(true);
      }
      const { seconds, progress } = getNewTimeProps(barRef.current.getSoundingClientRect(),
      xy[0], duration
      )
      if (last) {
        setTime(seconds)
        setIgnoreTimeUpdates(false)
        return
      }
      setStyles(progress);
    },
    { event: { passibe:false, capture: true }}
  )
  useEffect(() => {
    if (ignoreTimeUpdates) {
      return
    }
    setStyles(progress);
  }, [progress]
  return (
    <div className={`timebar-ct ${className || ""}`} style={{ position: 'relative, ...style '}}
    >
      <directstyled.div ref={barRef} className='timebar-bar' style={barStyle} />
      <directedstyled.div className=''


    </div>

  )




}
