import React from react;
import { useDrag } from 'react-use-gesture';
import { directstyled, useDirectStyle } from 'direct-styled'

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

  function setStyles((progress) {
    setCircleStyle({

    })
  })

}
