const LOAD_ALBUM = 'LOAD_ALBUM'

const loadAlbum = album => ({ type: LOAD_ALBUM, album })


export const getAlbum = (id) => async(dispatch) => {
  const response = await fetch(`http://localhost:5000/api/albums/3`)
  if (response.ok) {
    const album = await response.json()
    dispatch(loadAlbum(album))
  }
}

export function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD_ALBUM: {
      return {
        ...state,
        currentPlaylist: action.album
      }
    }
  }
}
