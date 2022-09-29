import './footer.scss'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate();

    return (
        <section className='footer-section'>
            <article className='copyright'>
                <p>2022@ Tracker Network </p>
                <a href='#'>Privacy Policy</a>
                
                <p>Trademarks are the property of their respective owners. Game      materials copyright CWAR. 
                </p>
            </article>
            <article className="socialmedia">
                <a href="#" className="socialmedia-icons">
                    <img src="../images/twitter-icon.svg" alt="twitter"/>
                </a>
                <a href="#" className="socialmedia-icons">
                    <img src="../images/insta-icon.svg" alt="instagram"/>
                </a>
                <a href="#" className="socialmedia-icons">
                    <img src="../images/discord-icon.svg" alt="discord"/>
                </a>
            </article>
        </section>
    )
}

export default Footer;
