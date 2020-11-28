import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { getAlbums } from '../store/actions/playerActions';
import { getTracks } from '../store/actions/trackActions'
import { getTrackPlayer, getAlbumPlayer } from '../store/actions/playerActions'

// const Example = ({ albums, tracks, getTracks, dispatch }) => {
const Example = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   getTracks();
  // }, []);

  // const playHandler = (e) => {
  //   const chunks = e.target.id.split('_')
  //   const id = parseInt(chunks[chunks.length - 1])
  //   dispatch(getTrackPlayer(id))
  // }

  const albumHandler = (e) => {
    const id = parseInt(e.target.id)
    console.log(id)
    dispatch(getAlbumPlayer(id))
  }

  return (
    <>
       <div onClick={albumHandler}>
        <button id='3'>Album3</button>
      </div>
      <div onClick={albumHandler}>
        <button id='4' >Album4</button>
      </div>
      <div onClick={albumHandler}>
        <button id='5'>Album5</button>
      </div>
      {/* <div style={{ heigth: '300px' }} />
      {tracks.map((track) => {
        return(
          <div onClick={playHandler} key={track.id}>
            <h2>{track.title}</h2>
            <h2>{track.artist_name}</h2>
            <button id={`track_${track.id}`} onClick={playHandler}>play mudafucka!</button>
          </div>
        )
      })}
      <h1>Example</h1> */}
    </>
  )
}


const ExampleContainer = () => {
  // const tracks = useSelector(state => state.tracks);

  // const dispatch = useDispatch();

  return (
    <>
      <Example
        // tracks={tracks}
        // dispatch={dispatch}
        // getTracks={() => dispatch(getTracks())}
      />
    </>
  )
}

export default ExampleContainer;
