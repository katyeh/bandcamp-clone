import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { play, pause, getAlbumPlayer, getTracksPlayer, setCurrentTrack } from '../../store/actions/playerActions';

const TrackCard = ({ albumCover, albumId, title, artistName, artistId, currentArtistId, currentTrackIndex, isPlaying, currentAlbum, currentTrackId, trackId, trackIndex }) => {
  const dispatch = useDispatch();

  const parseAlbumId = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 2]
  }

  const parseIndex = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 1]
  }

  const clickHandler = () => (e) => {
    console.log(artistId, trackIndex, trackId)

    if (currentTrackId === trackId) {
      if (isPlaying) {
        dispatch(pause())
      } else {
        dispatch(play())
      }
    }
    else {
      if (artistId !== currentArtistId) {
        (async () => {
          await dispatch(getTracksPlayer(parseInt(artistId)))
        })()
      }

      (async () => {
        await dispatch(setCurrentTrack(trackIndex, trackId))
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
          <img alt="" id={`album_${albumId}_0`} src={albumCover} className='track album-cover'></img>
        </div>
      </div>
      <div className='right-container'>
        <div className='button-album-info'>
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x icon-background"></i>
            <i id={`album_${albumId}_0`} onClick={clickHandler()} className={isPlaying && parseInt(trackId) === parseInt(currentTrackId) ? "fas fa-pause fa-stack-1x pause" : "fa fa-play fa-stack-1x play"} />
          </span>

          <div>
            <p className="artist" id={artistId} onClick={artistNameHandler}>{artistName}</p>
            <p className="title">{title}</p>
          </div>
        </div>
        {/* <div className='graphic'></div> */}
      </div>
    </div>
  )
}

const TrackCardContainer = ({ albumCover, albumId, title, artistName, artistId, trackId, trackIndex }) => {
  const isPlaying = useSelector(state => state.player.isPlaying)
  const currentTrackIndex = useSelector(state => state.player.currentTrackIndex)
  const currentTrackId = useSelector(state => state.player.currentTrackId)
  const currentAlbum = useSelector(state => state.player.albumId)
  const currentArtistId = useSelector(state => state.player.currentArtistId)

  return (
    <TrackCard
      albumCover={albumCover}
      albumId={albumId}
      title={title}
      trackId={trackId}
      artistName={artistName}
      artistId={artistId}
      currentTrackIndex={currentTrackIndex}
      isPlaying={isPlaying}
      currentAlbum={currentAlbum}
      currentTrackId={currentTrackId}
      trackIndex={trackIndex}
      currentArtistId={currentArtistId}
    >
    </TrackCard>
  )
}


export default TrackCardContainer;
