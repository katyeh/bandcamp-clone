export const LOAD_ALBUM = 'LOAD_ALBUM'
export const LOAD_TRACK = 'LOAD_TRACK'
export const LOAD_PLAYING_LIST = 'LOAD_PLAYING_LIST'


const initialSong = {
  playingNow: {
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
        playingNow: action.album.tracks
      }
    }
    // case LOAD_PLAYING_LIST: {
    //   return {
    //     ...state,
    //     playingNow: action.album
    //   }
    // }
    case LOAD_TRACK: {
      return {
        ...state,
        playingNow: action.track
      }
    }
    default: return state;
  }

}
