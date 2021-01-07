import React, { useState } from 'react';
import Modal from "react-modal";
import './TipModal.css'


Modal.setAppElement('#root');

const TipModal = ({user, artist}) => {
    // const [errors, setErrors] = useState([]);
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
            <button className="signup__btn" onClick={() => setIsOpen(true)}>Tip</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Tip Modal"
                className="login-modal"
                overlayclassName="modal__overlay"
                shouldCloseOnOverlayClick={true}
            >
                <div className="modal__header">
                    <h2>Tip</h2>
                    <button className="modal__close-btn" onClick={() => setIsOpen(false)}>X</button>
                </div>

                <form onSubmit={onTip} >
                    <div className="modal__content">
                        <label for="points">Choose Amount</label>
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
                    <div>
                        <image src="./dough2.png"></image>
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
