import React, { useEffect } from "react";
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
      <li>
        <strong>Country</strong> {artist.country}
      </li>
      <li>
        <strong>City</strong> {artist.city}
      </li>
      <li>
        <strong>Username</strong> {artist.username}
      </li>
      <ul>
        
      </ul>
      <li>
        <strong>Profile Image</strong> {artist.profile_image_url}
      </li>
      <li>
        <img src={artist.profile_image_url} alt={artist.profile_image_url} className="profile_image" />
      </li>
      <li>
        <img src={artist.cover_image_url} alt={artist.cover_image_url} className="cover_image" />
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
