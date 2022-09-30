import PlayerGrid from './PlayerGrid';
import Search from './Search';
import './leaderboard.scss';
import { useState } from "react";
import { PlayerDis } from '../models/data';
import jsonData from '../players.json'




const Leaderboard = () => {
    const [players, setPlayers] = useState<PlayerDis[]>(jsonData.players)
    
    return (
        <>
            <section className='leaderboard-container'>
                <div className='leaderboard-title'>
                    <img src="../images/trophy.svg" alt="cup" />
                    <h1>LEADERBOARD STATS</h1>
                    <img src="../images/trophy.svg" alt="cup" />
                </div>
                <PlayerGrid players={players} />
            </section>
        </>
    )
}

export default Leaderboard;

