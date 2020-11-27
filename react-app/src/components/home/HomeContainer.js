import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './Home';
import { getTracks } from '../../store/actions/trackActions';

const HomeContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hi')
    dispatch(getTracks())
  }, []);

  return ( 
    <Home />
  );
}
 
export default HomeContainer;