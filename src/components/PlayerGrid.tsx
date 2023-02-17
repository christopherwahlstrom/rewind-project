import { PlayerDis } from '../models/data'
import PlayerCard from './PlayerCard';
import { useEffect, useState } from "react";
import Search from './Search';
import React from 'react';

interface Props {
    players: PlayerDis[];
}


const PlayerGrid = ({players}: Props) => {
    const [filteredPlayers, setfilteredPlayers] = useState<PlayerDis[]>([])
    const [searchedData, setsearchedData] = useState('')
   

    function doSearch(event: any) {
        const searchTerm = event.target.value.trim();
        const searchWords = searchTerm.split(/\s+/);


        setsearchedData(searchTerm);

        setfilteredPlayers(players.filter((player) => 
            searchWords.every((word: string) => 
                player.name.toLowerCase().includes(word.toLowerCase()) || player.date.toLowerCase().includes(word.toLowerCase()) || player.result.toLowerCase().includes(word.toLowerCase())
            )
        ));
    }
        

    
    useEffect(() => {
        setfilteredPlayers(players);
    }, [players])
    
    return (
        <>
            <Search players={players} doSearch={doSearch} />
                <article className='stats-info'>
                    <h3>GAME</h3>
                    <h3>NAME</h3>
                    <h3>RESULT</h3>
                    <h3>DATE</h3>
                </article>
            <section className="grid-container"> 
                
                {filteredPlayers.filter((choice) => {
                    if (searchedData == '') {
                        return choice
                    } else if(choice.name.includes(searchedData) || choice.date.includes(searchedData) || choice.result.includes(searchedData)) {
                        return choice
                    }

                }).reverse().map(player => (
                    <PlayerCard key={player.gameId} player={player} /> 
                ))}    
            </section>   
        </>  
    )
}

export default PlayerGrid;