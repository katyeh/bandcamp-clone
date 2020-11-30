import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneArtist } from "../../store/actions/currentArtist"
import Albums from './CurrentAlbums'
import CurrentTracks from './CurrentTracks'
import ArtistFollowers from './ArtistFollowers'
import TipModal from './TipModal'
import UploadAlbum from './UploadAlbum'

function ArtistProfile({ getOneArtist, artist, user}) {
  const [trackDisplay, setTrackDisplay] = useState(true);
  const [albumDisplay, setAlbumDisplay] = useState(false);
  let userProfile = false;
  const { id }  = useParams();
  const artistId = Number.parseInt(id);
  useEffect(() => {
    getOneArtist(artistId)
  }, [artistId])

  if (user.id === artistId) {
    userProfile = true
  }
  if (!artist) {
    return null;
  }

  const showTracks = () => {
    setTrackDisplay(true);
    setAlbumDisplay(false);
  }

  const showAlbums = () => {
    setAlbumDisplay(true);
    setTrackDisplay(false);
  }

  return (
    <div className="profile__main">
      <div className="profile__container">
        <div
          className="cover-image__container"
          style={{
            backgroundImage:`url(${artist.cover_image_url})`,
          }}
        >
          {/* <img src={artist.cover_image_url} alt={artist.cover_image_url} className="cover_image" />  */}
          <img src={artist.profile_image_url} alt={artist.profile_image_url} className="profile_image" />
          <div className="artist-name">
            <h1>{artist.name}</h1>
          </div>
        </div>

        <div className="profile__body">
          <div className="albums-tracks__container">
            <button onClick={() => showTracks()} className="tracks-btn">Tracks</button>
            <button onClick={() => showAlbums()} className="albums-btn">Albums</button>

            {trackDisplay ?
              <div className="tracks__container">
                <CurrentTracks />
              </div>
            : null
            }
            {albumDisplay ?
              <div className="albums__container">
              <div>
                <Albums/>
              </div>
              <div>
                <ArtistFollowers />
              </div>
              </div>
            : null
            }
          </div>

          <div className="artist-info__container">
          {!userProfile ? (
            <TipModal user={user} artist={artist}/>
            ) : (
            <UploadAlbum user={user} />
          )}
          <ul>
            {/* <li>
              <strong>Artist Id</strong> {artistId}
            </li> */}
          {/*  <li>
              <strong>Artistname</strong> {artist.name}
            </li> */}
            <li className="bio">
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
        </div>
        </div>
        </div>

    </div>
  );
}


const ArtistProfileContainer = () => {

  const artist = useSelector((state) => state.currentArtist);
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <ArtistProfile
      artist={artist}
      getOneArtist={(id) => dispatch(getOneArtist(id))}
      user={user}
    />
  );
}

export default ArtistProfileContainer;
