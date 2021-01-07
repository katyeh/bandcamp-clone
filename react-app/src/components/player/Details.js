import React from 'react'


const Details = ({ info }) => {
  const { album_art_url, album_title, trackId, albumId, artist_name, title } = info
  return (

    <div className='player__details'>
        {title}
    </div>
  )
}


export default Details;
