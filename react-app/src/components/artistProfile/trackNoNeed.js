import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uploadNewTrack } from '../../store/actions/uploadTrackAction'
import Modal from "react-modal";


Modal.setAppElement('#root');


const UploadTrack = ({modalIsOpen, user}) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [newTrackUrl, setNewTrackUrl] = useState("");
  const [modalIsOpen2, setIsOpen2] = useState("");

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
        setIsOpen(false)
        history.push("/artists");
      }
    }
  };

  return (
  <>
    <Modal
      isOpen={modalIsOpen2}
      onRequestClose={() => setIsOpen2(false)}
      contentLabel="Signup Modal"
      className="signup-modal"
      overlayClassName="modal__overlay"
      shouldCloseOnOverlayClick={true}
    >
      <div className="modal__header">
        <h2>Sign Up</h2>
        <button className="modal__close-btn" onClick={() => setIsOpen2(false)}>X</button>
      </div>

      <form onSubmit={onUpload}>

        <div className="modal__content">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={updateTitle}
            value={title}
          ></input>
        </div>
        <div className="modal__content">
          <label>Lyrics</label>
          <input
            type="text"
            name="lyrics"
            onChange={updateLyrics}
            value={lyrics}
          ></input>
        </div>
          <div className="modal__content">
            <label>Choose Song</label>
            <input
              type="file"
              name="song_url"
              onChange={updateNewTrackUrl}
            ></input>
          </div>
        <div className="modal__content">
          <button className="modal__btn" type="submit">Upload</button>
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
