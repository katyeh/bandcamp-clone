import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { play, pause, getAlbumPlayer, setCurrentTrack } from '../../store/actions/playerActions';

const AlbumCard = ({ albumCover, albumId, title, artistName, tracks, artistId, currentIndex, isPlaying, currentAlbum, tracksIds }) => {
  const dispatch = useDispatch();

  const parseAlbumId = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 2]
  }

  const parseIndex = (st) => {
    const chunks = st.split('_')
    return chunks[chunks.length - 1]
  }

  const trackHandler = (e) => {
    if (tracksIds)
    (async () => {
        const index = parseIndex(e.target.id)
        const albumId = parseAlbumId(e.target.id)
        await dispatch(getAlbumPlayer(parseInt(albumId)))
        await dispatch(setCurrentTrack(index))
        await dispatch(pause())
        await dispatch(play())
    })()
  }

  const albumHandler = (e) => {


      const id = parseAlbumId(e.target.id)
      if ((!currentAlbum || currentAlbum !== id) || currentAlbum === id && !isPlaying) {
        (async () => {
          await dispatch(getAlbumPlayer(parseAlbumId(e.target.id)))
          await dispatch(pause())
          await dispatch(play())
        })()

      } else if (currentAlbum === id) {
        dispatch(pause())
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
            <img id={`album_${albumId}_0`} onClick={albumHandler} src={albumCover} className='album-cover'></img>
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
                      <td onClick={trackHandler} id={`track_${albumId}_${i}`}>{track.title}</td>
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
  const currentTrack = useSelector(state => state.player.currentTrack)
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
      currentTrack={currentTrack}
      isPlaying={isPlaying}
      currentAlbum={currentAlbum}
      tracksIds={tracksIds}
    >
    </AlbumCard>
  )
}


export default AlbumCardContainer;
