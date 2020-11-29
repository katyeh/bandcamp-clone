import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from '../store/actions/albumActions';
import { getTracks } from '../store/actions/trackActions'
import { getTrackPlayer, play, getAlbumPlayer } from '../store/actions/playerActions'
import AlbumCard from "./albumcard/AlbumCard";

const Example = ({ albums, dispatch }) => {

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
    dispatch(play(true))
  }
  console.log('hi')

  return (
    <>
      {albums.map((album) => {
        return(
          <AlbumCard
            key={album.id}
            albumCover={album.album_art_url}
            albumId={album.id}
            title={album.title}
            artistName={album.artist.name}
            tracks={album.tracks}
            artistId={album.artistd}
          />
        )
      })}
    </>
  )
}


const ExampleContainer = () => {
  const albums = useSelector(state => state.album.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbums());
  }, []);

  if (!albums) return null

  console.log(albums)

  return (
    <>
      <Example
      albums={albums}
      dispatch={dispatch}
      />
    </>
  )
}

export default ExampleContainer;
