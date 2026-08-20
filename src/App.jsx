import react, { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayer from './SelectedPlayer/SelectedPlayer'

const fetchPlayers =async()=>{
  const res = await fetch('players.json')
  return res.json()
}

const playersPromise = fetchPlayers()
function App() {
const [selectedPlayer,setSelectedPlayer]=useState([])

const handleSelectedPlayer =(player)=>{
 
  setSelectedPlayer([...selectedPlayer,player])
  
}

  return (
   <div className=''>
      <Navbar></Navbar>
      
      <div className='flex justify-between bg-white min-h-screen'>
        {/* left side  */}
          <div className='w-9/12'>
          
             <SearchBar ></SearchBar>
              <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                    <AvailablePlayers
                    handleSelectedPlayer={handleSelectedPlayer}
                    playersPromise ={playersPromise}></AvailablePlayers>
              </Suspense>
          </div>
          {/* right side  */}
          <div className='bg-purple-200 w-3/12'>
                <SelectedPlayer selectedPlayer={selectedPlayer}></SelectedPlayer>
          </div>
      </div>
   </div>
  )
}

export default App
