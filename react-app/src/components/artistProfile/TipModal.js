import React, { useState } from 'react';
import Modal from "react-modal";
import CloseIcon from '@material-ui/icons/Close';

Modal.setAppElement('#root');

const TipModal = ({user, artist}) => {
    const [amount, setAmount] = useState("0");
    const [modalIsOpen, setIsOpen] = useState(false);

    const updateAmount = (e) => {
        setAmount(e.target.value);
    };

    const onTip = async (e) => {
        e.preventDefault();
        setIsOpen(false)
        alert(`Thanks for your support! yours ${artist.username}`);
    }

    return (
        <div>
            <button className="button--signup" onClick={() => setIsOpen(true)}>Tip</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Tip Modal"
                className="modal modal--tip"
                overlayClassName="modal__overlay"
                shouldCloseOnOverlayClick={true}
            >
                <div className="modal__header">
                    <h2>Tip</h2>
                    <div className="modal__close-btn" onClick={() => setIsOpen(false)}>
                      <CloseIcon style={{fontSize: 30}} />
                    </div>
                </div>

                <form onSubmit={onTip} >
                    <div className="modal__content">
                        <label htmlFor="points">Choose Amount</label>
                        <input
                            className="slider"
                            type="range"
                            name="points"
                            min="5"
                            step="5"
                            max="30"
                            onChange={updateAmount}
                            value={amount}
                        ></input>
                    </div>
                    <div className="modal__content">
                        Amount: {amount} dough
                    </div>
                    <div className="modal__content">
                        <button className="modal__btn" type="submit">TIP</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default TipModal
