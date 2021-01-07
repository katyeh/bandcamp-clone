import React from 'react';
import {useSpring, animated} from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 30, (x - window.innerWidth / 2) / 30, 1.1]
const trans = (x, y, s) => `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const AlbumImage = ({track}) => {
  const [hoverProps, setHoverAnim] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <animated.div
      className="track__image"
      onMouseMove={({ clientX: x, clientY: y }) => setHoverAnim({ xys: calc(x, y) })}
      onMouseLeave={() => setHoverAnim({ xys: [0, 0, 1] })}
      style={{ transform: hoverProps.xys.interpolate(trans) }}
    >
      <img alt="" src={track.album.album_art_url} />
    </animated.div>
   );
}

export default AlbumImage;
