import './playerform.scss'
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

/* Eventuellt add a modal */

const PlayerForm = () => {
    const navigate = useNavigate();

    const [playerName, setPlayerName] = useState('');
    const [openModal, setOpenModal] = useState(false)
    let  infoArray: any[] = [];

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        infoArray.push(playerName);
        console.log(infoArray);
        {setOpenModal(true)}
    }
    return (
        <>
            <section className="form-container">
                <form className='addgame-form' onSubmit={submitForm}>
                    <h1 className='form-title'>ADD NEW GAME</h1>
                    
                    <h2 className='form-subtitle'>Player</h2>

                    <h3 className='form-info'>Name</h3>
                    <label className='frm-label' htmlFor="playername">Playername</label>
                    <input className='frm-input' type="text" id='playername' value={playerName} onChange={(e) => setPlayerName(e.target.value)} required placeholder='    Enter : Player name' />

                    <h3 className='form-info'>Result</h3>
                    <label className='frm-label' htmlFor="result">Result</label>
                    <input className='frm-input' type="text" id='result' name='result' required  placeholder='    Enter result : Win or Lost'/>

                    <h3 className='form-info'>Date</h3>
                    <label  className='frm-label' htmlFor="date">Result</label>
                    <input className='frm-input' type="text" id='date' name='date' required maxLength={10} minLength={10} placeholder='    Enter:       YYYY/ MM / DD'/>

                    <button className='add-result-btn'>ADD RESULT</button>
                </form>
                {openModal && <Modal username={playerName} closeModal={setOpenModal}/>}
            </section>
            <article className='downarrow'>
                <img src="../public/images/double-down.png" alt="downarrow"></img>
            </article>
        </>
    )
}

export default PlayerForm;