import React, { useEffect, useState } from 'react'
import { getAllArtists } from '../store/actions/artists'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ShowAllArtists = ({ getAllArtists, artists }) => {
  const history = useHistory();

    useEffect(() => {
        getAllArtists();
    }, [])


    if (!artists) return null
    return (
      <div className="artists__container">
        <div className="artists__main">
          <h1 className="artists__header">Artists</h1>
            <div className='artist__section'>
                {artists.map((artist) => {
                    return (
                    <div className="artists__body">
                      <div className="artist__profileimage">
                        <img onClick={() => history.push(`/artists/${artist.id}`)} src={artist.profile_image_url}></img>
                      </div>
                      <div className="artists-container__right">
                        <div onClick={() => history.push(`/artists/${artist.id}`)} key={artist.name}>{artist.name}</div>
                        <div>{artist.city},{artist.country}</div>
                      </div>
                    </div>
                    )
                })}
            </div>
        </div>
      </div>
    );
}

const ShowAllArtistsContainer = () => {
    const artists = useSelector((state) => Object.values(state.artists))
    const dispatch = useDispatch()
    return (
        <ShowAllArtists
            artists={artists}
            getAllArtists={() => dispatch(getAllArtists())}
        />
    )
}

export default ShowAllArtistsContainer;
