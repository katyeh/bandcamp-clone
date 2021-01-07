import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneArtist } from "../../store/actions/currentArtist"
import Albums from './CurrentAlbums'
import CurrentTracks from './CurrentTracks'
import ArtistFollowers from './ArtistFollowers'
import TipModal from './TipModal'
import UploadAlbum from './UploadAlbum'
import { getAlbums } from '../../store/actions/albumActions'
import UploadCoverPic from './UploadCoverPic'
import UploadProfilePic from './UploadProfilePic'


function ArtistProfile({ getOneArtist, artist, user, albums, getAlbums}) {
  const [trackDisplay, setTrackDisplay] = useState(false);
  const [albumDisplay, setAlbumDisplay] = useState(true);
  const [albumClass, setAlbumClass] = useState(true);
  const [trackClass, setTrackClass] = useState(false);




  useEffect(() => {
    getAlbums()
  }, [])



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

  // let album_class = albumClass.selected ? "white-btn" : "black-btn"
  // let track_class = trackClass.selected ? "white-btn" : "black-btn"

  const showAlbums = () => {
    setAlbumDisplay(true);
    setTrackDisplay(false);
    setAlbumClass(true);
    setTrackClass(false);
  }

  const showTracks = () => {
    setTrackDisplay(true);
    setAlbumDisplay(false);
    setTrackClass(true);
    setAlbumClass(false);
  }


  return (
    <div className="profile-main__container">
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
          <UploadProfilePic user={user} />
          <div className="artist-name">
            <h1>{artist.username}</h1>
          </div>
        </div>
        <UploadCoverPic user={user}/>
        <div className="profile__body">
          <div className="albums-tracks__container">
            <div className="album-track__btns">
              <button className={`profile-btn album-btn ${albumClass === true ? "white-btn" : ""}`} onClick={() => showAlbums()}>Albums</button>
              <button className={`profile-btn track-btn ${trackClass === true ? "white-btn" : ""}`} onClick={() => showTracks()}>Tracks</button>
            </div>
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
          <ul>
            <li>
              <strong>Name</strong> {artist.name}
            </li>
            <li className="bio">
              <strong>Bio</strong> {artist.bio}
            </li>
            <li>
              <strong>Country</strong> {artist.country}
            </li>
            <li>
              <strong>City</strong> {artist.city}
            </li>
            <div className="tip__div">
              <h4>Enjoy my music? Leave a tip!</h4>
              {!userProfile ? (
                <TipModal user={user} artist={artist}/>
                ) : (
                <div><UploadAlbum user={user} albums={albums} />
                <div className="stash">
                  <p>Dough: {artist.tip_stash}</p>
                </div>
                </div>
              )}
            </div>
          </ul>
        </div>
        </div>
        </div>

    </div>
    </div>

  );
}


const ArtistProfileContainer = () => {

  const artist = useSelector((state) => state.currentArtist);
  const user = useSelector((state) => state.user)
  const albums = useSelector((state) => state.album)
  const dispatch = useDispatch()
  return (
    <ArtistProfile
      artist={artist}
      getOneArtist={(id) => dispatch(getOneArtist(id))}
      user={user}
      getAlbums={() => dispatch(getAlbums())}
      albums={albums}
    />
  );
}

export default ArtistProfileContainer;
