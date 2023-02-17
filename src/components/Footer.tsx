import './footer.scss'
import twitter from '../assets/images/twitter-icon.svg'
import insta from '../assets/images/insta-icon.svg'
import discord from '../assets/images/discord-icon.svg'
import React from 'react'

const Footer = () => {
    
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
                    <img src={twitter} alt="twitter"/>
                </a>
                <a href="#" className="socialmedia-icons">
                    <img src={insta} alt="instagram"/>
                </a>
                <a href="#" className="socialmedia-icons">
                    <img src={discord} alt="discord"/>
                </a>
            </article>
        </section>
    )
}

export default Footer;
