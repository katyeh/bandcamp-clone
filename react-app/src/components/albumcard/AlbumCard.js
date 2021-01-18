import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { play, pause, getAlbumPlayer, setCurrentTrack } from '../../store/actions/playerActions';
import { like, unLike } from '../../store/actions/trackActions'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const AlbumCard = ({ albumCover, albumId, title, artistName, tracks, artistId, currentTrackIndex, isPlaying, currentAlbum, currentTrackId, mode }) => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('user_id')

  const parseAlbumId = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 2]
  }

  const parseIndex = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 1]
  }

  const checkIfLiked = (id, likes) => {
    for (let i = 0; i < likes.length; i++) {
      console.log(id, likes[i].artist_id)
      if (parseInt(likes[i].artist_id) === parseInt(id)) {
        return likes[i].id
      }
    }
    return false
  }

  const onLike = (trackId) => {
    console.log(trackId)
    // dispatch(like(userId, trackId))
  }

  const onUnlike = (likeId) => {
    // dispatch(unLike(likeId))
  }

  const buttonClickHandler = () => {
    if (currentAlbum === albumId) {
      if (isPlaying) {
        dispatch(pause())
      } else {
        dispatch(play())
      }
    } else {
      (async () => {
        await dispatch(setCurrentTrack(0, tracks[0].id))
        await dispatch(getAlbumPlayer(albumId))
        await dispatch(pause())
        await dispatch(play())
      })()
    }
  }

  const clickHandler = (i, trackId) => (e) => {
    console.log(i, trackId, albumId)
    // const id = parseAlbumId(e.target.id)
    // const index = parseIndex(e.target.id)
    console.log('currentAlbum: ', currentAlbum, ', albumId: ', albumId, ', currentTrackIndex: ', currentAlbum, ', i: ', i )

    // if (currentAlbum === albumId && currentTrackIndex === i) {
    if (currentTrackId === trackId) {
      if (isPlaying) {
        dispatch(pause())
      } else {
        dispatch(play())
      }
    } else {
      (async () => {
        await dispatch(setCurrentTrack(i, trackId))
        await dispatch(getAlbumPlayer(albumId))
        await dispatch(pause())
        await dispatch(play())
      })()
    }
  }
  const artistNameHandler = (e) => {
    // console.log(e.target.id)
  }

  return (
    <div className='album__container'>
      <div className='left-container'>
        <div className='album__image'>
          <img alt="" id={`album_${albumId}_0`} src={albumCover} className='track album-cover'></img>
        </div>
      </div>
      <div className='right-container'>
        <div className='button-album-info'>
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x icon-background"></i>
            <i id={`album_${albumId}_0`} onClick={buttonClickHandler}
              className={
                mode==='album'
                ? isPlaying && parseInt(albumId) === parseInt(currentAlbum) ? "fas fa-pause fa-stack-1x pause" : "fa fa-play fa-stack-1x play"
                : isPlaying && parseInt(albumId) === parseInt(currentAlbum) ? "fas fa-pause fa-stack-1x pause" : "fa fa-play fa-stack-1x play"
              }
            />
          </span>

          <div>
            <p className="artist" id={artistId} onClick={artistNameHandler}>{artistName}</p>
            <p className="title">{tracks.length === 1 ? tracks[0].title : title}</p>
          </div>
        </div>
        <div className='graphic'></div>
        {tracks.length > 1 ?

          <div className='table__container'>
            <table className='table'>
              <tbody>
                {
                  tracks.map((track, i) => {
                    const likedId = checkIfLiked(userId, track.likes)
                    return (
                      <tr key={track.id} className='table__row'>
                        <td onClick={clickHandler(i, track.id)} id={`track_${albumId}_${i}`}><img alt="" src={albumCover}/>{"      "+`  ${i + 1}      ${track.title}`}<span>{track.likes.length}</span></td>{likedId ? <i className="fas fa-heart" onClick={onUnlike(likedId)}/>:  <i className="far fa-heart" onClick={onLike(track.id)}/>}
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>

          : null

        }
      </div>
    </div>
  )
}

const AlbumCardContainer = ({ albumCover, albumId, title, artistName, tracks, artistId }) => {
  const isPlaying = useSelector(state => state.player.isPlaying)
  const currentTrackIndex = useSelector(state => state.player.currentTrackIndex)
  const currentTrackId = useSelector(state => state.player.currentTrackId)
  const currentAlbum = useSelector(state => state.player.albumId)
  const tracksIds = useSelector(state => state.player.tracksIds)

  return (
    <AlbumCard
      albumCover={albumCover}
      albumId={albumId}
      title={title}
      artistName={artistName}
      tracks={tracks}
      artistId={artistId}
      currentTrackIndex={currentTrackIndex}
      isPlaying={isPlaying}
      currentAlbum={currentAlbum}
      tracksIds={tracksIds}
      currentTrackId={currentTrackId}
    >
    </AlbumCard>
  )
}


export default AlbumCardContainer;
