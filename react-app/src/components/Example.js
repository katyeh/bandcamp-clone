import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { getAlbums } from '../store/actions/playerActions';
import { getTracks } from '../store/actions/trackActions'
import { getTrackPlayer } from '../store/actions/playerActions'

const Example = ({ albums, tracks, getTracks, dispatch }) => {

  useEffect(() => {
    getTracks();
  }, []);

  const playHandler = (e) => {
    const chunks = e.target.id.split('_')
    const id = parseInt(chunks[chunks.length - 1])
    dispatch(getTrackPlayer(id))
  }

  const albumHandler = (e) => {
    const chunks = e.target.id.split('_')
    const id = parseInt(chunks[chunks.length - 1])
    dispatch(getTrackPlayer(id))
  }



  return (
    <>
      <div style={{ heigth: '300px' }} />
      <div id='3' onClick={albumHandler}>
        Album1
        <button></button>
      </div>
      <div id='4' onClick={albumHandler}>
        Album2
        <button></button>
      </div>
      <div id='' onClick={albumHandler}>
        Album1
        <button></button>
      </div>
      {tracks.map((track) => {
        return(
          <div onClick={playHandler} key={track.id}>
            <h2>{track.title}</h2>
            <h2>{track.artist_name}</h2>
            <button id={`track_${track.id}`} onClick={playHandler}>play mudafucka!</button>
          </div>
        )
      })}
      <h1>Example</h1>
    </>
  )
}


const ExampleContainer = () => {
  const tracks = useSelector(state => state.tracks);

  const dispatch = useDispatch();

  return (
    <>
      <Example
        tracks={tracks}
        dispatch={dispatch}
        getTracks={() => dispatch(getTracks())}
      />
    </>
  )
}

export default ExampleContainer;
