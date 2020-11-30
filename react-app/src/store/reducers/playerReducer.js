export const LOAD_ALBUM = 'LOAD_ALBUM'
export const LOAD_PLAYING_LIST = 'LOAD_PLAYING_LIST'
export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export const SET_TRACK = 'SET_TRACK' ;


const initialSong = {
  tracksData: {
    album_art_url:"https://busker2.s3.amazonaws.com/albumeimage/drakealbum.jpg",
    album_id:6,
    album_title:"Thank Me Later",
    artist_id:2,
    artist_name:"Drake",
    id:21,
    lyrics:"<<URL HERE>>",
    mp3_url:"https://busker2.s3.amazonaws.com/songs/drake/Best+I+Ever+Had.mp3",
    title:"Best I Ever Head"
  }
}


export default function reducer(state = [], action) {
  Object.freeze(state);

  switch(action.type) {
    case LOAD_ALBUM: {
      return {
        ...state,
        tracksData: action.album.tracks,
        tracksIds: action.album.tracks.map(track => Object.keys(track)[0]),
        albumId: action.id
    }
  }

    case SET_TRACK: {
      return {
        ...state,
        currentTrackIndex: action.idx
      }
    }
    case PLAY: {
      return {
        ...state,
        isPlaying: true
      }
    }
    case PAUSE: {
      return {
        ...state,
        isPlaying: false
      }
    }
    default: return state;
  }

}
