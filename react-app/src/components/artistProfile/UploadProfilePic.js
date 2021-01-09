import React, { useState } from 'react';
import { updateProfileImage } from '../../store/actions/updatePhotoActions';
import { useDispatch } from 'react-redux';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

const UploadProfilePic = ({ user }) => {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [imagePreview, setImagePreview] = useState("");

    const updateImageUrl = (e) => {
        setImageUrl(e.target.files[0]);
        setIsOpen(true);

        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onloadend = (e) => {
                setImagePreview(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    };

    const onUpload = async (e) => {
        e.preventDefault();
        if (user) {
            let formData = new FormData();
            formData.append('profile_image_url', imageUrl)
            formData.append('user_id', user.id)

            await dispatch(updateProfileImage(formData, user.id))
            setIsOpen(false);
        }
    }

    return (
        <form onSubmit={onUpload}>
            <div className="profile__img-div">
                <img src={user.profile_image_url} alt="" className="profile__user-img"></img>
                <div className="file_input_wrap">
                    <input
                        type="file"
                        name="profile_image_url"
                        id="file_input"
                        onChange={updateImageUrl}
                        className="hide"
                    />
                    <label htmlFor="file_input" className="profileimage__update-btn">
                        <div className="profileimage__div">
                            <PhotoCameraIcon
                                style={{ fontSize: 30 }}
                            />
                        </div>
                    </label>
                </div>
            </div>

            {isOpen ?
                <div className="profilemodal">
                    <section className="profilemodal__main">
                        <div className="profilemodal__header">
                            <div className="profilemodal__label">Update Profile Picture</div>
                            <div className="profilemodal__close">
                                <CloseIcon
                                    style={{ fontSize: 30 }}
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>
                        </div>

                        <div className="profilemodal__preview-wrap">
                            <div className="profilemodal__img-div">
                                <img
                                    className="profilemodal__preview-img"
                                    src={imagePreview}
                                    id="imagePreview"
                                    alt="Preview"
                                />
                            </div>
                        </div>
                        <div className="profilemodal__btn-div">
                            <button className="profilemodal__btn" type="submit">
                            <AddIcon style={{ fontSize: 30 }} />
                            Upload Profile Photo</button>
                        </div>
                    </section>
                </div>
                : ""
            }
        </form>
    )
}

export default UploadProfilePic;
