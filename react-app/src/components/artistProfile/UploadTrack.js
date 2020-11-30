import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uploadNewTrack } from '../../store/actions/uploadTrackAction'
import Modal from "react-modal";


Modal.setAppElement('#root');


const UploadTrack = ({user, albumId}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [newTrackUrl, setNewTrackUrl] = useState("");
  const [modalIsOpen, setIsOpen] = useState(true);

  const updateTitle = (e) => {
    setTitle(e.target.value);
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
      let track = new FormData();
      track.append('title', title);
      track.append('lyrics', lyrics);
      track.append('newTrackUrl', newTrackUrl);
      track.append('albumId', albumId);
      track.append('artistId',user.id)
  
      track = await dispatch(uploadNewTrack(track));

      if (user && !user.errors) {
        setIsOpen(false)
        history.push("/artists");
      }
    }
  };

  return (
  <>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Signup Modal"
      className="signup-modal"
      overlayClassName="overlay"
      shouldCloseOnOverlayClick={true}
    >
      <div className="login-header">
        <h2>Sign Up</h2>
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


const UploadTrackContainer = () => {


  return (
    <UploadTrack
    />
  )
}

export default UploadTrackContainer;
