import './leaderboard.scss'
import { useNavigate } from 'react-router-dom'
import Search from './Search'
import PlayerCard from './PlayerCard'

const Leaderboard = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className='leaderboard-container'>
                <div className='leaderboard-title'>
                    <img src="../images/trophy.svg" alt="cup" />
                    <h1>LEADERBOARD STATS</h1>
                    <img src="../images/trophy.svg" alt="cup" />
                </div>
                <Search players={players} doSearch={doSearch} />
                <article>

                </article>
                <PlayerCard players={players}/>

            </section>
        </>
    )
}

export default Leaderboard;

