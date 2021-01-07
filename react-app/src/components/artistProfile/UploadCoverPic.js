import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCoverImage } from '../../store/actions/updatePhotoActions';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';





const UploadCoverPic = ({user}) => {
const dispatch = useDispatch();
const [isOpen, setIsOpen] = useState(false);
const [imageUrl, setImageUrl] = useState("");
const [imagePreview, setImagePreview] = useState("");


//upload cover photo


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
            formData.append('cover_image_url', imageUrl)
            formData.append('user_id', user.id)

            await dispatch(updateCoverImage(formData, user.id))
            setIsOpen(false);
        }
    }

  //upload cover photo

  return (
      <form onSubmit={onUpload}>
          <div className="profile__cover">
              <div className="file_input_wrap">
                  <input
                      type="file"
                      name="cover_image_url"
                      id="cover_input"
                      onChange={updateImageUrl}
                      className="hide"
                  />
                  <label htmlFor="cover_input" className="coverimage__update-btn">
                      <div className="coverimage__div">
                          <PhotoCameraIcon
                              style={{ fontSize: 30 }}
                          />
                          <p>Edit Cover Photo</p>
                      </div>
                  </label>
              </div>
          </div>

          {isOpen ?
              <div className="modal">
                  <section className="modal__main">
                      <div className="modal__header">
                          <div className="profilemodal__label">Update Cover Photo</div>
                          <div className="modal__close">
                              <CloseIcon
                                  style={{ fontSize: 30 }}
                                  onClick={() => setIsOpen(false)}
                              />
                          </div>
                      </div>

                      <div className="modal__preview-wrap">
                          <div className="modal__img-div">
                              <img
                                  className="modal__preview-img"
                                  src={imagePreview}
                                  id="imagePreview"
                                  alt="Preview Image"
                              />
                          </div>
                      </div>
                      <div className="modal__btn-div">
                          <button className="profilemodal__btn" type="submit">
                              <AddIcon style={{ fontSize: 30 }} />
              Upload Photo</button>
                      </div>
                  </section>
              </div>
              : ""
          }
      </form>
  )
}


export default UploadCoverPic