import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { play, pause, getAlbumPlayer, setCurrentTrack } from '../../store/actions/playerActions';

const AlbumCard = ({ albumCover, albumId, title, artistName, tracks, artistId, currentTrackIndex, isPlaying, currentAlbum, tracksIds }) => {
  const dispatch = useDispatch();

  const parseAlbumId = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 2]
  }

  const parseIndex = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 1]
  }

  const clickHandler = (e) => {
      const id = parseAlbumId(e.target.id)
      const index = parseIndex(e.target.id)

      if (currentAlbum === id && currentTrackIndex === index) {
        if (isPlaying) {
          dispatch(pause())
        } else {
          dispatch(play())
        }
      } else {
        (async () => {
          await dispatch(setCurrentTrack(index))
          await dispatch(getAlbumPlayer((id)))
          await dispatch(pause())
          await dispatch(play())
        })()

      }

  }
  const artistNameHandler = (e) => {
    console.log(e.target.id)
  }



  console.log(albumCover)
  return (
    <>
      <div className='album__container'>
        <div className='left-container'>
          <div className='cover-container'>
            <img id={`album_${albumId}_0`} onClick={clickHandler} src={albumCover} className='album-cover'></img>
          </div>
        </div>
        <div className='right-container'>
          <div className='button-album-info'>
            <h6 id={artistId} onClick={artistNameHandler}>{artistName}</h6>
            <h4>{title}</h4>
          </div>
          <div className='graphic'>Wave</div>
          <div className='tracks-table'>
            <table>
              <tbody>
                {
                tracks.map((track, i) => {
                  return (
                    <tr key={track.id}>
                      <td onClick={clickHandler} id={`track_${albumId}_${i}`}>{track.title}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

const AlbumCardContainer = ({ albumCover, albumId, title, artistName, tracks, artistId }) => {
  const currentTrackIndex = useSelector(state => state.player.currentTrackIndex)
  const isPlaying = useSelector(state => state.player.isPlaying)
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
    >
    </AlbumCard>
  )
}


export default AlbumCardContainer;
