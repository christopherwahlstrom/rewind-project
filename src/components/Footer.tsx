import './footer.scss'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate();

    return (
        <section className='footer-section'>
            <article className='copyright'>
                <p>2022@ Tracker Network </p>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Support</a>
                <a href='#'>Developer API</a>
                <a href='#'>Press Kit</a>
            </article>
            <article className='trademark-info'>
                <p>CS  is a registered trademark of CWAR. Trademarks are the property of their respective owners. Game      materials copyright CWAR. 
                CWAR has not endorsed and is not responsible for this site or its content.
                </p>
            </article>
            <article className="socialMedia">
                <a href="#" className="socialmedia-icons">
                    <img src="../images/twitter-icon.png" alt="twitter"/>
                </a>
                <a href="#" className="socialmedia-icons">
                    <img src="../images/insta-icon.png" alt="instagram"/>
                </a>
                <a href="#" className="socialmedia-icons">
                    <img src="../images/discord-icon.png" alt="discord"/>
                </a>
            </article>
        </section>
    )
}

export default Footer;