import React, { useState } from 'react';
import {useSpring, animated, config} from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const AlbumImage = ({track}) => {
  const [hovered, setHovered] = useState(false);

  const [hoverProps, setHoverAnim] = useSpring(() => ({ 
    xys: [0, 0, 1], 
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const onHover = ({ clientX: x, clientY: y }) => {
    setHovered(true);
    if (hovered) {
      setHoverAnim({ xys: calc(x, y) });
    }
  }

  const onHoverLeave = () => {

  }

  return ( 
    <animated.div 
      className="track__image"
      onMouseMove={onHover}
      onMouseLeave={() => setHoverAnim({ xys: [0, 0, 1] })}
      style={{ transform: hoverProps.xys.interpolate(trans) }}
    >
      <img src={track.album.album_art_url} />
    </animated.div>
   );
}
 
export default AlbumImage;