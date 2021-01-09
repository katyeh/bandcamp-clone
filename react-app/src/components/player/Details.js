import React from 'react'


const Details = ({ info }) => {
  const { album_art_url, album_title, trackId, albumId, artist_name, title } = info
  return (

    <div className='details'>
        {title}
        <br/>
        {artist_name}
    </div>
  )
}


export default Details;
