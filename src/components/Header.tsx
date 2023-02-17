import './header.scss'
import logo from  '../assets/images/logo.png'
import React from 'react';

const Header = () => {
    
    return (
        <header className='header-section'>
            <div className='logo'>
                <img src={logo} alt="logo-pic" />
            </div>
            
            <div className='header-text'>
                <h1 className='header-headline'>
                CSS: GO STATS
                </h1>
                <h3 className='header-subline'>
                Your site for detailed stats
                </h3>
            </div>
        </header>
    )
}


export default Header;