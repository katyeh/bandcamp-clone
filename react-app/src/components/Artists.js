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
        <div>
            <div className='artist__section'>
                {artists.map((artist) => {
                    return (
                    <div>
                      <li onClick={() => history.push(`/artists/${artist.id}`)} key={artist.name}>{artist.name}</li>
                    </div>
                    )
                })}
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
