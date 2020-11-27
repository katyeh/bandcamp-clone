import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from '../store/actions/playerActions'

const Example = ({ albums, getAlbums }) => {
  useEffect(() => {
    getAlbums();
  }, []);

  if (!albums) return null

  return (
    <>
      <div style={{heigth:'300px'}}/>
      <h1>Example</h1>
      <button>play</button>
    </>
  )
}


const ExampleContainer = () => {
  const albums = useSelector((state) => state.albums)
  const dispatch = useDispatch();

  return (
    <Example
      albums={albums}
      getAlbums={() => dispatch(getAlbums())}
    />
  )
}

export default ExampleContainer;
