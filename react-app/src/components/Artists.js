
import React, { useEffect, useState } from 'react'
import { getAllArtists } from '../store/actions/artists'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

const ShowAllArtists = ({ getAllArtists, artists }) => {

    useEffect(() => {
        getAllArtists();
    }, [])

    console.log(artists)

    if (!artists) return null
    return (
        <div>
            <div className='artist__section'>
                {artists.map((artist) => {
                    return (
                    <li key={artist.name}>{artist.name}</li>
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