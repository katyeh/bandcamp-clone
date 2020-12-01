import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAlbums } from "../../store/actions/currentAlbumsAction"
import AlbumCard from '../albumcard/AlbumCard'


const Albums = ({ getAlbums, albums}) => {

const { id } = useParams();
const artistId = Number.parseInt(id);
  useEffect(() => {
    getAlbums(artistId)
  }, [artistId])

if (!albums || !albums.length) return null
return (
    <div>
        {/* <div className='albums__section'>
            {albums.map((album) => {
                return (
                        <li key={album.title}>{album.title}</li>
                )
            })} */}
        {albums.map((album) => {
        return (
        <AlbumCard
            key={album.id}
            albumCover={album.album_art_url}
            albumId={album.id}
            title={album.title}
            artistName={album.artist.name}
            tracks={album.tracks}
            artistId={album.artistd}
        />
        )
    })}
    
    </div>
);
}

const AlbumsContainer = () => {

    const albums = useSelector((state) => state.currentAlbums.albums)
    const dispatch = useDispatch()
    return (
        <Albums
            albums={albums}
            getAlbums={(id) => dispatch(getAlbums(id))}
        />
    );
}

export default AlbumsContainer;



// {
//     albums.map((album) => {
//         return (
//             <AlbumCard
//                 key={album.id}
//                 albumCover={album.album_art_url}
//                 albumId={album.id}
//                 title={album.title}
//                 artistName={album.artist.name}
//                 tracks={album.tracks}
//                 artistId={album.artistd}
//             />
//         )
//     })
// }