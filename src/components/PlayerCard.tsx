import { PlayerDis } from "../models/data";
import './playercard.scss'


interface Props {
    player: PlayerDis;
}

const PlayerCard = ({player}: Props) => {
    
    return (
        <section className="card" key={player.gameId}>
            <h3>{player.name}</h3>
            <p>{player.result}</p>
            <p>{player.date}</p>
        </section>
    )
}


export default PlayerCard;