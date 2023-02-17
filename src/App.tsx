import { useEffect } from 'react'
import './App.scss'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage";
import jsonData from "./players.json"
import React from 'react';

function App() {
  

  useEffect(() => {
    const currentPlayers = localStorage.getItem("players"); // get the current players out of the localstorage
    if(!currentPlayers){ // if there are no current players
      localStorage.setItem("players", JSON.stringify(jsonData.players)) // I set the players from the json file in the localstorage
      const storageEvent = new Event('storageChange'); // create event to tell leaderboard when localstorage changes
      document.dispatchEvent(storageEvent) // send event
    }
  }, [])
  
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<LandingPage />}/>
      </Routes>
    </div>
  )
}

export default App
