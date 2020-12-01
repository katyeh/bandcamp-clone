import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getOneAlbum } from '../store/actions/albumActions';
import AlbumCard from "./albumcard/AlbumCard";
import { useParams } from 'react-router-dom';

const Tracks = ({ album }) => {

  console.log(album)
  return (
    <>
      {/* {album.id} */}
          {/* <AlbumCard
            key={album.id}
            albumCover={album.album_art_url}
            albumId={album.id}
            title={album.title}
            artistName={album.artist.name}
            tracks={album.tracks}
            artistId={album.artist.id}
          /> */}
    </>
  )
}


const TracksContainer = () => {
  const album = useSelector(state => state.album.album);
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log('HERE IS THE ID', id)

  useEffect(() => {
    dispatch(getOneAlbum(id));
  }, []);

  if (!album) return null

  console.log('albums', album)

  return (
    <>
      <Tracks
      album={album}
      dispatch={dispatch}
      />
    </>
  )
}

export default TracksContainer;
