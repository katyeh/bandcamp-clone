const initialStore = {
  player: {
    currentTrackIndex: 0,
    tracksData: [
      {
        album: {
          album_art_url: 'https://busker2.s3.amazonaws.com/albumeimage/drakealbum.jpg',
          id: 6,
          release_date: 'Fri, 01 Jan 2010 00:00:00 GMT',
          single: false,
          title: 'Thank Me Later'
        },
        album_art_url: 'https://busker2.s3.amazonaws.com/albumeimage/drakealbum.jpg',
        album_id: 6,
        album_title: 'Thank Me Later',
        artist_id: 2,
        artist_name: 'Drake',
        id: 21,
        lyrics: '<<URL HERE>>',
        mp3_url: 'https://busker2.s3.amazonaws.com/songs/drake/Best+I+Ever+Had.mp3',
        title: 'Best I Ever Head'
      }
    ],
    isPlaying: false,
    currentTrackId: 21,
    tracksIds: [
      'album'
    ],
    albumId: 6

  }
}

export default initialStore;
