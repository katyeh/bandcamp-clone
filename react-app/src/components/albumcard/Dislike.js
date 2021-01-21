import React, { useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { deleteLike } from '../../store/actions/likeActions';
import { useDispatch } from 'react-redux';
import Like from './Like';

const DislikePost = ({ like, setLike, setHeart, trackId, user }) => {
  const id = parseInt(trackId)
  const dispatch = useDispatch();

  const onDislike = async (track_id, artist_id) => {
    await dispatch(deleteLike(trackId, user.id));
    setHeart(false);
    setLike(like - 1);
  };

  return (
    <div onClick={() => onDislike()} className="dislike-btn">
      <FavoriteIcon style={{ fontSize: 25 }} />
    </div>
  )
}

export default DislikePost;
