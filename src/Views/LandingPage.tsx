import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import jsonData from "../players.json"
import Leaderboard from "../components/Leaderboard";


const LandingPage = () => {

    return(
        <>
            <Header />
            <Hero  />
            <Leaderboard />
            <Footer />
        </>
    )
}

export default LandingPage;