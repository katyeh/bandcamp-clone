import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { like, unLike } from '../../store/actions/currentTracksAction'

const Like = ({ trackId, trackLikes, artistId }) => {
  const user = useSelector(state => state.user);
  const [heart, setHeart] = useState();
  const [likeId, setLikeId] = useState('')
  const dispatch = useDispatch();

  const isHeart = () => {
    for (let i = 0; i < trackLikes.length; i++) {
      console.log('track', parseInt(trackLikes[i].artist_id), 'user', parseInt(user.id))
      if (parseInt(trackLikes[i].artist_id) === parseInt(user.id)) {
        setLikeId(trackLikes[i].id)
        return true
      }
    }
    return false
  }

  useEffect(() => {
    setHeart(isHeart())

  }, [ heart, trackLikes ])



  const onLike = () => {
    dispatch(like(trackId, user.id, artistId))
  };

  const onUnlike = () => {
    dispatch(unLike(likeId, artistId))
  };

  return (
    <div className="like">
      {heart ?
        <div className="like-btn" onClick={() => onUnlike()} >
          <FavoriteIcon button style={{ fontSize: 25 }} />
        </div>
        :
        <div className="like-btn" onClick={() => onLike()} >
          <FavoriteBorderIcon button style={{ fontSize: 25 }} />
        </div>
      }
      <p>{trackLikes.length}</p>
    </div>
  )
}

export default Like;
