import './modal.scss'
import { useNavigate } from 'react-router-dom'
import React from 'react';

interface Props {
    closeModal: (close: boolean) => void;
    playername: string;

}

const Modal = ({closeModal, playername}: Props) => {
    const navigate = useNavigate();
    const closeBtn = () => {
        closeModal(false)
        navigate('/')
    }

    return(
        <section className='modal-container'>
            <article className='modal'>
                <h1 className='modal-h1'>Your stats have been received</h1>
                <p className='modal-p'>{playername}</p>
                <button className='modal-button' onClick={closeBtn}>CLOSE WINDOW</button>
            </article>
        </section>
    )
}

export default Modal;