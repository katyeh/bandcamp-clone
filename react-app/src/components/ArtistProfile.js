import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneArtist } from "../store/actions/currentArtist"

function ArtistProfile({getOneArtist,artist}) {
  // const [artist, setArtist] = useState({});
 
  const { id }  = useParams();
  const artistId = Number.parseInt(id);
  useEffect(() => {
    getOneArtist(artistId)
  }, [artistId])
  console.log(artist)

  if (!artist) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>Artist Id</strong> {artistId}
      </li>
      <li>
        <strong>Artistname</strong> {artist.name}
      </li>
      <li>
        <strong>Bio</strong> {artist.bio}
      </li>
    </ul>
  );
}


const ArtistProfileContainer = () => {

  const artist = useSelector((state) => state.currentArtist);
  const dispatch = useDispatch()
  return (
    <ArtistProfile
      artist={artist}
      getOneArtist={(id) => dispatch(getOneArtist(id))}
    />
  );
}

export default ArtistProfileContainer;
