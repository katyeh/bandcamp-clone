import { LOAD_ALBUMS } from '../reducers/albumReducer'

export const loadAlbums = (albums) => ({ type: LOAD_ALBUMS, albums})


export const getAlbums = () => async(dispatch) => {
  const response = await fetch(`/api/albums/`)
  if (response.ok) {
    const albums = await response.json()
    dispatch(loadAlbums(albums))
  }
}
