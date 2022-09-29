import './hero.scss'
import PlayerForm from './PlayerForm';
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();


    return (
        <section className='main-hero'>
            <article>
                <PlayerForm />
            </article>
        </section>
    )
}

export default Hero;
