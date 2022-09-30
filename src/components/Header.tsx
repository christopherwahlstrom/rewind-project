import './header.scss'


const Header = () => {
    
    return (
        <header className='header-section'>
            <div className='logo'>
                <img src="../images/logo.png" alt="logo-pic" />
            </div>
            
            <div className='header-text'>
                <h1 className='header-headline'>
                CS: GO STATS
                </h1>
                <h3 className='header-subline'>
                Add detailed Stats and Check Leaderboard
                </h3>
            </div>
        </header>
    )
}


export default Header;