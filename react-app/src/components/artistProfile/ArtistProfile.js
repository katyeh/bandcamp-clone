import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneArtist } from "../../store/actions/currentArtist"
import Albums from './CurrentAlbums'
import CurrentTracks from './CurrentTracks'
import ArtistFollowers from './ArtistFollowers'

function ArtistProfile({ getOneArtist, artist}) { 
  const { id }  = useParams();
  const artistId = Number.parseInt(id);
  useEffect(() => {
    getOneArtist(artistId)
  }, [artistId])

  if (!artist) {
    return null;
  }

  return (
    <>
     <div className="cover_imgage_container">
      <img src={artist.cover_image_url} alt={artist.cover_image_url} className="cover_image" />
      <img src={artist.profile_image_url} alt={artist.profile_image_url} className="profile_image" />
    </div>
    <div>
      <CurrentTracks />
    </div>
    <div>
      <Albums/>
    </div>
    <div>
      <ArtistFollowers />
    </div>
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
        <li>
          <strong>Country</strong> {artist.country}
        </li>
        <li>
          <strong>City</strong> {artist.city}
        </li>
        <li>
          <strong>Username</strong> {artist.username}
        </li>
      </ul>
    </>
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
