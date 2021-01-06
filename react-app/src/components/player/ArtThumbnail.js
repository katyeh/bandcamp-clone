import React from 'react'


const ArtThumbnail = ({ info }) => {
  const { album_art_url, album_title, albumId, artist_name, title } = info
  return (
    <div style={{ color: 'white' }}>
      <div className='album__image'>
        <img className='track' id={`album_${albumId}_0`} src={album_art_url} className='album-cover'></img>
      </div>
      <div>
        {title}

      </div>
    </div>
  )
}


export default ArtThumbnail;
