import PlayerGrid from './PlayerGrid';
import Search from './Search';
import './leaderboard.scss';
import { useState } from "react";
import { PlayerDis } from '../models/data';
import jsonData from '../players.json'
import { useEffect } from 'react';


const Leaderboard = () => {
    // get the players from the localStorage or from jsonData if there is nothing in localstorage
    const [players, setPlayers] = useState<PlayerDis[]>(JSON.parse(localStorage.getItem("players")) || []);

    useEffect(() => {
        // add an event to detect changes in the localStorage
        document.addEventListener('storageChange', () => {
            const allPlayers = JSON.parse(localStorage.getItem("players"));
            setPlayers(allPlayers);
        }); 

        // remove the event listener
        return () => document.removeEventListener('storageChange', () => {
            const allPlayers = JSON.parse(localStorage.getItem("players"));
            setPlayers(allPlayers);
        });
    }, [])

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

