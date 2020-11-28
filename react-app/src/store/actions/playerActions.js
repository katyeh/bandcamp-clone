import { LOAD_TRACK } from '../reducers/playerReducer'
import { LOAD_ALBUM } from '../reducers/playerReducer'

export const loadTrack = (track) => ({ type: LOAD_TRACK, track })
export const loadAlbum = (album, id) => ({ type: LOAD_ALBUM, album, id })

export const getAlbumPlayer = (id) => async(dispatch) => {
  const response = await fetch(`/api/albums/player/${id}`)
  if (response.ok) {
    const album = await response.json()
    dispatch(loadAlbum(album, id))
  }
}

export const getTrackPlayer = (id) => async(dispatch) => {
  const response = await fetch(`/api/tracks/${id}`)
  if (response.ok) {
    const track = await response.json()
    dispatch(loadTrack(track))
  }
}
