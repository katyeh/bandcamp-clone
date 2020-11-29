import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAlbums } from "../../store/actions/currentAlbumsAction"


const Albums = ({ getAlbums, albums}) => {

const { id } = useParams();
const artistId = Number.parseInt(id);
  useEffect(() => {
    getAlbums(artistId)
  }, [artistId])

if (!albums) return null
return (
    <div>
        <div className='albums__section'>
            {albums.map((album) => {
                return (
                        <li key={album.title}>{album.title}</li>
                )
            })}
        </div>
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