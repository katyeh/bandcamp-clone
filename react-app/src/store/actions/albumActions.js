import { LOAD_ALBUMS, LOAD_ALBUM } from '../reducers/albumReducer'

export const loadAlbums = (albums) => ({ type: LOAD_ALBUMS, albums})
export const loadAlbum = (album) => ({ type: LOAD_ALBUM, album })

export const getOneAlbum = (id) => async(dispatch) => {
  const response = await fetch(`/api/albums/player/${id}`)
  // const response = await fetch(`/api/albums/${id}`)
  if (response.ok) {
    const album = await response.json()
    dispatch(loadAlbum(album))
  }
}

export const getAlbums = () => async(dispatch) => {
  const response = await fetch(`/api/albums`)
  if (response.ok) {
    const albums = await response.json()
    dispatch(loadAlbums(albums))
  }
}
