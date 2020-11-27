import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from '../store/actions/playerActions';
import { loadPlayingList } from '../store/reducers/playerReducer'

const Example = ({ albums, getAlbums, dispatch }) => {

  useEffect(() => {
    getAlbums();
  }, []);
  console.log(albums)
  if (!albums) return null

  console.log('albums from example', albums)


  const playHandler = () => {
    dispatch(loadPlayingList(albums))
  }

  return (
    <>
      <div style={{ heigth: '300px' }} />
      {albums.map(() => {

      })}
      <h1>Example</h1>
      <button onClick={playHandler} >play</button>
    </>
  )
}


const ExampleContainer = () => {
  const albums = useSelector((state) => state.player.albums)
  const dispatch = useDispatch();

  return (
    <>
      {/* <h1>hello</h1> */}
      <Example
        albums={albums}
        dispatch={dispatch}
        getAlbums={() => dispatch(getAlbums())}
      />
    </>
  )
}

export default ExampleContainer;
