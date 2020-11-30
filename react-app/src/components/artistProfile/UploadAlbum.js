import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UploadTrack from './UploadTrack'
import Modal from "react-modal";
import { uploadNewAlbum } from '../../store/actions/uploadAlbumAction'


Modal.setAppElement('#root');


const UploadAlbum = ({ user }) => {
    const dispatch = useDispatch();
    const single = true;
    const [title, setTitle] = useState("");
    const [newAlbumCover, setNewAlbumCover] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateNewAlbumCover = (e) => {
        setNewAlbumCover(e.target.files[0]);
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
            setIsOpen(false);
            if (user && !user.errors) {
                return (
                    <UploadTrack albumId={album.id}/>
                )
            }
        }
    };

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
                    <button className="login-btn" type="submit">Next</button>
                </div>
            </form>
        </Modal>
    </>
  )
}


const UploadTrackContainer = () => {


    return (
        <UploadAlbum
        />
    )
}

export default UploadTrackContainer;