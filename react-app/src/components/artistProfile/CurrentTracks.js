import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTracks } from "../../store/actions/currentTracksAction"
import TrackCard from '../albumcard/TrackCard'


const CurrentTracks = ({ getTracks, tracks }) => {
    const { id } = useParams();
    const artistId = Number.parseInt(id);
    useEffect(() => {
        getTracks(artistId);
    }, [artistId])


    // const trackIndex = useSelector(state => {
    //   if (state.currentTracks && state.currentTracks.tracks) {
    //     return state.currentTracks.tracks.findIndex(track => (
    //       trackId === track.id
    //     ));
    //   }
    //   return null;
    // });
    if (!tracks) return null
    return (
        <div>
            <div className='tracks__section'>
                {tracks.map((track, i) => {
                    return (
                            <TrackCard
                            track={track}
                            // key={track.id}
                            // albumCover={track.album_art_url}
                            // albumId={track.album_id}
                            // title={track.title}
                            // artistName={track.artist_name}
                            // trackId={track.id}
                            // artistId={track.artist_id}
                            trackIndex={i}
                            // trackLikes={track.likes}
                        />
                    )
                })}
            </div>
        </div>
    );
}

const CurrentTracksContainer = () => {

    const tracks = useSelector((state) => state.currentTracks.tracks);
    const dispatch = useDispatch();
    return (
        <CurrentTracks
            tracks={tracks}
            getTracks={(id) => dispatch(getTracks(id))}
        />
    );
}

export default CurrentTracksContainer;
