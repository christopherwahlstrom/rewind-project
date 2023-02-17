import React from "react";
import { PlayerDis } from "../models/data";
import './playercard.scss'


interface Props {
    player: PlayerDis;
}

const PlayerCard = ({player}: Props) => {
    if (player.name == null) {
        return null; 
    }


    return (
        <section className="card" key={player.gameId}>
            <h3 className="stats" >{player.gameId}</h3>
            <h3 className="stats" >{player.name}</h3>
            <p className="stats" >{player.result}</p>
            <p className="stats" >{player.date}</p>
        </section>
    )
}


export default PlayerCard;