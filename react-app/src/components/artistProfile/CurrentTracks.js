import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTracks } from "../../store/actions/currentTracksAction"
import AlbumCard from '../albumcard/AlbumCard'


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
                            <AlbumCard
                            key={track.id}
                            albumCover={track.album_art_url}
                            albumId={track.album_id}
                            title={track.title}
                            artistName={track.artist_name}
                            tracks={[]}
                            artistId={track.artistd}
                        />

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
