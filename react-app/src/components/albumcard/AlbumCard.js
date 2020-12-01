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

        console.log('index', index)
        console.log('________________________')
        console.log(id)
        await dispatch(setCurrentTrack(index))
        await dispatch(getAlbumPlayer(id))
        // await dispatch(pause())
        await dispatch(play())
      })()
    }
  }
  const artistNameHandler = (e) => {
    console.log(e.target.id)
  }

  return (
    <div className='album__container'>
      <div className='left-container'>
        <div className='album__image'>
          <img className='track' id={`album_${albumId}_0`} src={albumCover} className='album-cover'></img>
        </div>
      </div>
      <div className='right-container'>
        <div className='button-album-info'>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x icon-background"></i>
              <i id={`album_${albumId}_0`} onClick={clickHandler} className={isPlaying && parseInt(albumId) === parseInt(currentAlbum) ? "fas fa-pause fa-stack-1x pause" : "fa fa-play fa-stack-1x play" } />
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
                    return (
                      <tr key={track.id} className='table__row'>
                        <td onClick={clickHandler} id={`track_${albumId}_${i}`}><img src={albumCover}/>{"      "+`  ${i + 1}      ${track.title}`}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>

          :  null

       }
      </div>
    </div>
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
