import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTracks } from "../../store/actions/currentTracksAction"


const CurrentTracks = ({ getTracks, tracks }) => {
    const { id } = useParams();
    const artistId = Number.parseInt(id);
    useEffect(() => {
        getTracks(artistId)
    }, [artistId])

    if (!tracks) return null
    return (
        <div>
            <div className='tracks__section'>
                {tracks.map((track) => {
                    return (
                            <li key={track.title}>{track.title}</li>
                    )
                })}
            </div>
        </div>
    );
}

const CurrentTracksContainer = () => {

    const tracks = useSelector((state) => state.currentTracks.tracks)
    const dispatch = useDispatch()
    return (
        <CurrentTracks
            tracks={tracks}
            getTracks={(id) => dispatch(getTracks(id))}
        />
    );
}

export default CurrentTracksContainer;