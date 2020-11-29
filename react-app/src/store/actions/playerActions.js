import { LOAD_TRACK, PLAY, PAUSE, LOAD_ALBUM, SET_INDEX } from '../reducers/playerReducer'


export const loadTrack = (track) => ({ type: LOAD_TRACK, track })
export const loadAlbum = (album, id) => ({ type: LOAD_ALBUM, album, id })
export const play = () => ({ type: PLAY })
export const pause = () => ({ type: PAUSE })
export const setCurrentTrackIndex = (idx) => ({ type: SET_INDEX, idx })

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
