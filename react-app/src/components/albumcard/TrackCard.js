import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { play, pause, getAlbumPlayer, setCurrentTrack } from '../../store/actions/playerActions';

const TrackCard = ({ albumCover, albumId, title, artistName, artistId, currentTrackIndex, isPlaying, currentAlbum, currentTrackId, trackId, trackIndex }) => {
  const dispatch = useDispatch();

  const parseAlbumId = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 2]
  }

  const parseIndex = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 1]
  }

  const clickHandler = (trackId) => (e) => {
    const id = parseAlbumId(e.target.id)
    const index = parseIndex(e.target.id)

    console.log(currentTrackIndex, trackId)

    if (currentTrackId === trackId) {
      if (isPlaying) {
        dispatch(pause())
      } else {
        dispatch(play())
      }
    } else {
      (async () => {
        await dispatch(setCurrentTrack(trackIndex, trackId))
        await dispatch(getAlbumPlayer(id))
        await dispatch(pause())
        await dispatch(play())
      })()
    }
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
              <i id={`album_${albumId}_0`} onClick={clickHandler(trackId)} className={isPlaying && parseInt(trackId) === parseInt(currentTrackId) ? "fas fa-pause fa-stack-1x pause" : "fa fa-play fa-stack-1x play" } />
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
    >
    </TrackCard>
  )
}


export default TrackCardContainer;
