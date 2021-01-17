import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addLike } from "../../store/actions/likeActions";
import { useDispatch, useSelector } from 'react-redux';
import DislikePost from './Dislike';

const Like = ({ trackId, trackLikes }) => {
  const user = useSelector(state => state.user);
  const [heart, setHeart] = useState(false);
  const [like, setLike] = useState(trackLikes.length)
  const dispatch = useDispatch();

  useEffect(() => {
    trackLikes.forEach(like => {
      if (like.artist_id == user.id) {
        setHeart(true)
      }
    })
  }, [trackLikes, heart, user.id])

  const onLike = () => {
    dispatch(addLike(trackId, user.id))
    setHeart(true)
    setLike(like + 1);
  };

  return (
    <div className="like">
      {heart ?
        <DislikePost like={like} setLike={setLike} setHeart={setHeart} trackId={trackId} user={user} />
      :
      <div className="like-btn" onClick={() => onLike()} >
        <FavoriteBorderIcon style={{fontSize: 25}} />
      </div>
      }
      <p>{like}</p>
    </div>
  )
}

export default Like;
