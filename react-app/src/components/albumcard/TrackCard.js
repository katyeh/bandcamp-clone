import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { play, pause, getAlbumPlayer, getTracksPlayer, setCurrentTrack } from '../../store/actions/playerActions';
import Like from './Like';


const TrackCard = ({ track, trackIndex, currentTrackIndex, isPlaying, currentAlbum, currentTrackId, currentArtistId }) => {
  const dispatch = useDispatch();
  const [trackLikes, setTrackLikes] = useState(track.likes);

  useEffect(() => {
    setTrackLikes(track.likes);
  }, [track.likes])

  const parseAlbumId = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 2]
  }

  const parseIndex = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 1]
  }

  const clickHandler = () => (e) => {
    // console.log(artistId, trackIndex, trackId)

    if (currentTrackId === track.id) {
      if (isPlaying) {
        dispatch(pause())
      } else {
        dispatch(play())
      }
    }
    else {
      if (track.artist_id !== currentArtistId) {
        (async () => {
          await dispatch(getTracksPlayer(parseInt(track.artist_id)))
        })()
      }

      (async () => {
        await dispatch(setCurrentTrack(trackIndex, track.id))
        await dispatch(pause())
        await dispatch(play())
      })()
    }
    // else if (artistId === currentArtistId) {
    //   dispatch(setCurrentTrack(trackIndex, trackId))
    // } else
    // {

  }

  const artistNameHandler = (e) => {
    // console.log(e.target.id)
  }

  return (
    <div className='trackalbum__container'>
      <div className='left-container'>
        <div className='album__image'>
          <img alt="" id={`album_${track.album_id}_0`} src={track.album_art_url} className='track album-cover'></img>
        </div>
      </div>
      <div className='trackalbum__container__right-container'>
        <div className='button-album-info'>
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x icon-background"></i>
            <i id={`album_${track.album_id}_0`} onClick={clickHandler()} className={isPlaying && parseInt(track.id) === parseInt(currentTrackId) ? "fas fa-pause fa-stack-1x pause" : "fa fa-play fa-stack-1x play"} />
          </span>

          <div>
            <p className="artist" id={track.artist_id} onClick={artistNameHandler}>{track.artist_name}</p>
            <p className="title">{track.title}</p>
          </div>
        </div>
        <Like trackId={track.id} trackLikes={track.likes} />
        {/* <div className='graphic'></div> */}
      </div>
    </div>
  )
}

const TrackCardContainer = ({ track, trackIndex }) => {
  const isPlaying = useSelector(state => state.player.isPlaying)
  const currentTrackIndex = useSelector(state => state.player.currentTrackIndex)
  const currentTrackId = useSelector(state => state.player.currentTrackId)
  const currentAlbum = useSelector(state => state.player.albumId)
  const currentArtistId = useSelector(state => state.player.currentArtistId)

  return (
    <TrackCard
    track={track}
      // albumCover={albumCover}
      // albumId={albumId}
      // title={title}
      // trackId={trackId}
      // artistName={artistName}
      // artistId={artistId}
      currentTrackIndex={currentTrackIndex}
      isPlaying={isPlaying}
      currentAlbum={currentAlbum}
      currentTrackId={currentTrackId}
      trackIndex={trackIndex}
      currentArtistId={currentArtistId}
      // trackLikes={trackLikes}
    >
    </TrackCard>
  )
}


export default TrackCardContainer;
