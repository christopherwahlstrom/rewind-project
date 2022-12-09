import './playerform.scss'
import { useState } from 'react';
import Modal from './Modal';



type newplayerType = {  
    name?: string;
    date?: string;
    result?: string;
    gameId?: string; 
};

const PlayerForm = () => {
    const [name, setname] = useState('');
    const [openModal, setOpenModal] = useState(false)
    const [newplayer, setNewPlayer] = useState<newplayerType>({
        name: '',
        date: '',
        result: '',
        gameId: '',
    });  
    
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        {setOpenModal(true)}
        const currentPlayers = JSON.parse(localStorage.getItem("players") || [] ); 
        newplayer.gameId = currentPlayers.length + 1;
        currentPlayers.push(newplayer); 
        localStorage.setItem("players", JSON.stringify(currentPlayers)); 
        const storageEvent = new Event('storageChange');  
        document.dispatchEvent(storageEvent) 
    }
    
    return (
        <>
            <section className="form-container">
                <form className='addgame-form' onSubmit={submitForm}>
                    <h1 className='form-title'>ADD NEW GAME STATS</h1>
                    
                    <h2 className='form-subtitle'>Stats</h2>

                    <h3 className='form-info'>Player or players in game</h3>
                    <label className='frm-label' htmlFor="name"></label>
                    <input className='frm-input' type="text" id='name'  
                    onChange={(e) => 
                        setNewPlayer({
                            date: newplayer.date,
                            gameId: newplayer.gameId,
                            name: e.target.value,
                            result: newplayer.result,
                            })} required placeholder='  Name vs. Name ' />

                    <h3 className='form-info'>Result</h3>
                    <label className='frm-label' htmlFor="result"></label>
                    <input className='frm-input' type="text" id='result' 
                    onChange={(e) => 
                        setNewPlayer({
                            date: newplayer.date,
                            gameId: newplayer.gameId,
                            name: newplayer.name,
                            result: e.target.value,
                            })} required  placeholder='  Enter your : Win or Lost'/>

                    <h3 className='form-info'>Date</h3>
                    <label  className='frm-label' htmlFor="date"></label>
                    <input className='frm-input' type="text" id='date'  
                    onChange={e => setNewPlayer({
                        date: e.target.value,
                            gameId: newplayer.gameId,
                            name: newplayer.name,
                            result: newplayer.result,
                            })} required maxLength={10} minLength={10} placeholder='  Enter date as:YYYY-MM-DD'/>
                    <button  className='add-result-btn'>ADD RESULT</button>
                </form>
                {openModal && <Modal playername={name} closeModal={setOpenModal}/>}
            </section>
            <article className='downarrow'>
                <img src="/images/double-down.png" alt="downarrow"></img>
            </article>
        </>
    )
}

export default PlayerForm;
