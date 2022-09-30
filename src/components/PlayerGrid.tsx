import { PlayerDis } from '../models/data'
import PlayerCard from './PlayerCard';
import { useState } from "react";
import Search from './Search';

interface Props {
    players: PlayerDis[];
    playerOnClick: (gameId: number) => void;
}

const PlayerGrid = ({players, playerOnClick}: Props) => {
    const [filteredPlayers, setfilteredPlayers] = useState(players)
    const [searchedData, setsearchedData] = useState('')

    function doSearch(event: any) {
        let inputSearch = event.target.value
        let upperInputSearch = inputSearch.charAt(0).toUpperCase() + inputSearch.slice(1)
        setsearchedData(upperInputSearch)
        console.log("The game", event.target.value);
    }

    return (
        <>
            <Search players={players} doSearch={doSearch} />
                <article className='stats-info'>
                    <h3>GAMES</h3>
                    <h3>PLAYER</h3>
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
                    <PlayerCard key={player.gameId} player={player} playerOnClick={playerOnClick}/> 
                ))} 
                
            </section>   
        </>  
    )
}

export default PlayerGrid;