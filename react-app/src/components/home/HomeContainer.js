import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home';
import { getTracks } from '../../store/actions/trackActions';
import { getArtists } from '../../store/actions/artists';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.tracks);
  const user = useSelector(state => state.user);

  useEffect(() => {
    (async () => {
      await dispatch(getTracks());
      if (user.id) {
        dispatch(getArtists(user.id));
      }

    })()
  }, []);

  return (
    <Home tracks={tracks} />
  );
}
 
export default HomeContainer;