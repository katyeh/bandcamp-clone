import React, { useState,  } from "react";
import { useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { uploadNewAlbum } from '../../store/actions/uploadAlbumAction'
import { uploadNewTrack } from '../../store/actions/uploadTrackAction'


Modal.setAppElement('#root');


const UploadAlbum = ({ user }) => {
    let newAlbumId

    const history = useHistory();
    const dispatch = useDispatch();
    const single = true;
    const [title, setTitle] = useState("");
    const [newAlbumCover, setNewAlbumCover] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    //track
    const [trackTitle, setTrackTitle] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [newTrackUrl, setNewTrackUrl] = useState("");
    const [modalIsOpen2, setIsOpen2] = useState("");
  

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateNewAlbumCover = (e) => {
        setNewAlbumCover(e.target.files[0]);
    };
    const updateTrackTitle = (e) => {
        setTrackTitle(e.target.value);
    };
    const updateLyrics = (e) => {
        setLyrics(e.target.value);
    };

    const updateNewTrackUrl = (e) => {
        setNewTrackUrl(e.target.files[0]);
    };

    const onUpload = async (e) => {
        e.preventDefault();
        if (user) {
            let album = new FormData();
            album.append('title', title);
            album.append('newAlbumCover', newAlbumCover);
            album.append('single', single);
            album.append('artistId', user.id)

            album = await dispatch(uploadNewAlbum(album));
            newAlbumId = user.id + 10
            setIsOpen(false);
            
            // history.push("/home")

        }
    };
    ///track upload
    const onUpload2 = async (e) => {
        e.preventDefault();
        if (user) {
            let track = new FormData();
            track.append('trackTitle', trackTitle);
            track.append('lyrics', lyrics);
            track.append('newTrackUrl', newTrackUrl);
            track.append('albumId', newAlbumId);
            track.append('artistId', user.id)

            track = await dispatch(uploadNewTrack(track));
            setIsOpen2(false)
        }
    }

    return (
    <>
        <button className="signup__btn" onClick={() => setIsOpen(true)}>Upload Album</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="Signup Modal"
            className="signup-modal"
            overlayClassName="overlay"
            shouldCloseOnOverlayClick={true}
        >
            <div className="login-header">
                <h2>Upload Album</h2>
                <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
            </div>

            <form onSubmit={onUpload}>

                <div className="login-content">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        onChange={updateTitle}
                        value={title}
                    ></input>
                </div>
                <div className="login-content">
                    <label>Album Cover</label>
                    <input
                        type="file"
                        name="album_cover"
                        onChange={updateNewAlbumCover}
                    ></input>
                </div>
                <div className="login-content">
                        <button className="login-btn" type="submit" onClick={() => setIsOpen2(true)}>Next</button>
                </div>
            </form>
        </Modal>
        <Modal
            isOpen={modalIsOpen2}
            onRequestClose={() => setIsOpen2(false)}
            contentLabel="Signup Modal"
            className="signup-modal"
            overlayClassName="overlay"
            shouldCloseOnOverlayClick={true}
        >
            <div className="login-header">
                <h2>Upload Song</h2>
                <button className="close-btn" onClick={() => setIsOpen2(false)}>X</button>
            </div>

            <form onSubmit={onUpload2}>

                <div className="login-content">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        onChange={updateTrackTitle}
                        value={trackTitle}
                    ></input>
                </div>
                <div className="login-content">
                    <label>Lyrics</label>
                    <input
                        type="text"
                        name="lyrics"
                        onChange={updateLyrics}
                        value={lyrics}
                    ></input>
                </div>
                <div className="login-content">
                    <label>Choose Song</label>
                    <input
                        type="file"
                        name="song_url"
                        onChange={updateNewTrackUrl}
                    ></input>
                </div>
                <div className="login-content">
                    <button className="login-btn" type="submit">Upload</button>
                </div>
            </form>
        </Modal>
    </>
  )
}


export default UploadAlbum;