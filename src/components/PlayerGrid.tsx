import { PlayerDis } from '../models/data'
import PlayerCard from './PlayerCard';
import { useEffect, useState } from "react";
import Search from './Search';

interface Props {
    players: PlayerDis[];
}


const PlayerGrid = ({players}: Props) => {
    const [filteredPlayers, setfilteredPlayers] = useState<PlayerDis[]>([])
    const [searchedData, setsearchedData] = useState('')
   

    function doSearch(event: any) {
        let inputSearch = event.target.value
        let upperInputSearch = inputSearch.charAt(0).toUpperCase() + inputSearch.slice(1)
        setsearchedData(upperInputSearch)
        console.log("The game", event.target.value);
    }

    // set filteredPlayers to players if players changes
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

                }).map(player => (
                    <PlayerCard key={player.gameId} player={player} /> 
                ))}    
            </section>   
        </>  
    )
}

export default PlayerGrid;