import './playerform.scss'
import { useState } from 'react';
import Modal from './Modal';
import { useEffect } from 'react';



type newplayerType = {  
    name?: string;
    date?: string;
    result?: string;
    gameId?: string; 
};

const PlayerForm = () => {
    const [name, setname] = useState('');
    const [openModal, setOpenModal] = useState(false)
    const [newplayer, setNewPlayer] = useState<newplayerType>({});  
    let  infoArray: any[] = [];
    
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        infoArray.push(name);
        console.log(infoArray);
        {setOpenModal(true)}
        
        localStorage.setItem("players", JSON.stringify(newplayer));
    }
    
    return (
        <>
            <section className="form-container">
                <form className='addgame-form' onSubmit={submitForm}>
                    <h1 className='form-title'>ADD NEW GAME</h1>
                    
                    <h2 className='form-subtitle'>Player</h2>

                    <h3 className='form-info'>Name</h3>
                    <label className='frm-label' htmlFor="name">name</label>
                    <input className='frm-input' type="text" id='name' default={name}  
                    onChange={(e) => 
                        setNewPlayer({
                            date: newplayer.date,
                            gameId: newplayer.gameId,
                            name: e.target.value,
                            result: newplayer.result,
                            })} required placeholder='  Enter : Player name' />

                    <h3 className='form-info'>Result</h3>
                    <label className='frm-label' htmlFor="result">Result</label>
                    <input className='frm-input' type="text" id='result' default={name}
                    onChange={(e) => 
                        setNewPlayer({
                            date: newplayer.date,
                            gameId: newplayer.gameId,
                            name: newplayer.name,
                            result: e.target.value,
                            })} required  placeholder='  Enter result : Win or Lost'/>

                    <h3 className='form-info'>Date</h3>
                    <label  className='frm-label' htmlFor="date">Result</label>
                    <input className='frm-input' type="text" id='date' default={name} 
                    onChange={e => setNewPlayer({
                        date: e.target.value,
                            gameId: newplayer.gameId,
                            name: newplayer.name,
                            result: newplayer.result,
                            })} required maxLength={10} minLength={10} placeholder='  Enter:  YYYY-MM-DD'/>
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
