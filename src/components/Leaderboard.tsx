import PlayerGrid from './PlayerGrid';
import './leaderboard.scss';
import { useState } from "react";
import { PlayerDis } from '../models/data';
import { useEffect } from 'react';
import trophy from '../assets/images/trophy.svg'
import React from 'react';

const Leaderboard = () => {
    
    const [players, setPlayers] = useState<PlayerDis[]>(JSON.parse(localStorage.getItem("players")) ?? [] );
  
    useEffect(() => {        
        document.addEventListener('storageChange', () => {
            const allPlayers = JSON.parse(localStorage.getItem("players") || []);
            setPlayers(allPlayers);
        }); 

        return () => document.removeEventListener('storageChange', () => {
            const allPlayers = JSON.parse(localStorage.getItem("players") || []);
            setPlayers(allPlayers);
        });
    }, [])

    
    return (
        <>
            <section className='leaderboard-container'>
                <div className='leaderboard-title'>
                    <img src={trophy} alt="trophy-cup" />
                    <h1>LEADERBOARD STATS</h1>
                    <img src={trophy} alt="trophy-cup" />
                </div>
                <PlayerGrid players={players} />
            </section>
        </>
    )
}

export default Leaderboard;

