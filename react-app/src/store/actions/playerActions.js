import LOAD_ALBUM from '../reducers/playerReducer'
import { loadAlbum } from '../reducers/playerReducer'

export const getAlbum = () => async(dispatch) => {
  const response = await fetch(`http://localhost:5000/api/albums/3`)
  if (response.ok) {
    const album = await response.json()
    dispatch(loadAlbum(album))
  }
}
