import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home';
import { getTracks } from '../../store/actions/trackActions';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.tracks);

  useEffect(() => {
    dispatch(getTracks());
  }, []);

  return (
    <Home tracks={tracks} />
  );
}
 
export default HomeContainer;