import { loadAlbums } from '../reducers/playerReducer'

export const getAlbums = () => async(dispatch) => {
  const response = await fetch(`/api/artists/3/albums`)
  if (response.ok) {
    const albums = await response.json()
    dispatch(loadAlbums(albums))
  }
}
