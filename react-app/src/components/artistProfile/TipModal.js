import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from "react-modal";
import './TipModal.css'


Modal.setAppElement('#root');

const TipModal = ({user, artist}) => {
    // const [errors, setErrors] = useState([]);
    const [amount, setAmount] = useState("0");
    
    const [modalIsOpen, setIsOpen] = useState(false);

    let history = useHistory();

    const updateAmount = (e) => {
        setAmount(e.target.value);
    };



    // onSubmit = { onTip }
    // const onTip = async (e) => {
    //     e.preventDefault();
    //     const 
    // }

    // const onLogin = async (e) => {
    //     e.preventDefault();
    //     const user = await login(email, password);
    //     if (!user.errors) {
    //         setAuthenticated(true);
    //         setIsOpen(false);
    //         history.push("/")
    //     } else {
    //         setErrors(user.errors);
    //     }
    // };

    return (
        <div>
            <button className="signup__btn" onClick={() => setIsOpen(true)}>Tip</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Tip Modal"
                className="login-modal"
                overlayClassName="overlay"
                shouldCloseOnOverlayClick={true}
            >
                <div className="login-header">
                    <h2>Tip</h2>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
                </div>

                <form >
                    <div className="login-content">
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
                    <div className="login-content">
                        Amount: {amount} 
                    </div>
                    <div>
                        <image src="./dough2.png"></image>
                    </div>
                        <div className="login-content">
                            <button className="login-btn" type="submit">TIP</button>
                        </div>
                </form>
            </Modal>
        </div>
    )
}

export default TipModal