import React, { useState, useEffect  } from "react";
import { useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { uploadNewAlbum } from '../../store/actions/uploadAlbumAction'
import { uploadNewTrack } from '../../store/actions/uploadTrackAction'


//loading icon 

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

//loading icon


Modal.setAppElement('#root');


const UploadAlbum = ({ user, albums }) => {
    let newAlbumId
    if(albums && albums.albums) {
        newAlbumId = albums.albums.length + 1
    }
    

    const history = useHistory();
    const dispatch = useDispatch();
    const single = true;
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("");
    const [album_art_url, setNewAlbumCover] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    //track
    const [track_title, setTrackTitle] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [mp3_url, setNewTrackUrl] = useState("");
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
            album.append('album_art_url', album_art_url);
            album.append('single', single);
            album.append('artist_id', user.id)

            await dispatch(uploadNewAlbum(album));
            setIsOpen(false);
            
            // history.push("/home")

        }
    };
    ///track upload
    const onUpload2 = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (user) {
            let track = new FormData();
            track.append('track_title', track_title);
            track.append('lyrics', lyrics);
            track.append('mp3_url', mp3_url);
            track.append('album_id', newAlbumId);
            track.append('artist_id', user.id)
            await dispatch(uploadNewTrack(track));
            setLoading(false)
            setIsOpen2(false)
            history.push("/")
            alert('Album upload successfully')
        }
    }
    const classes = useStyles();

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
                        className="file-upload"
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
                        value={track_title}
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
                        className="file-upload"
                    ></input>
                </div>
                <div className="login-content">
                {loading ? (
                    <div className={classes.root}>
                        <CircularProgress color="secondary" />
                    </div>
                ) : (
                    
                    <button className="login-btn" type="submit">Upload</button>
                )}
                </div>
            </form>
        </Modal>
    </>
  )
}




export default UploadAlbum;