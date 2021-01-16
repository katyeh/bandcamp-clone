import React from 'react'


const Details = ({ track }) => {

  if (!track) return null

  return (

    <div className="placeholder">
    <div style={{ backgroundImage: `url(${track.album_art_url})` }} className="thumbnail" />
    {/* <ArtThumbnail info={tracks[currentTrackIndex]} /> */}
    <div className='details'>
      {track.title}
      <br />
      {track.artist_name}
    </div>
  </div>
  )
}


export default Details;
