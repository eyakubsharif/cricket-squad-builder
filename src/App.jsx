import react, { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayer from './SelectedPlayer/SelectedPlayer'
import { toast, ToastContainer } from 'react-toastify'

const fetchPlayers =async()=>{
  const res = await fetch('players.json')
  return res.json()
}

const playersPromise = fetchPlayers()
function App() {
const [selectedPlayer,setSelectedPlayer]=useState([])
const [availableBalance,setAvailableBalance]=useState(8500)
const [playerPrice,setPlayerPrice]=useState(0)
const [roles,setRoles]=useState("")
const [selectedCountry,setSelectedCountry]=useState('')

const handleSelectedPlayer =(player)=>{
 
  setSelectedPlayer([...selectedPlayer,player])
 if(availableBalance<player.price){
  return
 }else{
   setPlayerPrice(playerPrice+player.price)
 }
  
}
// remove selected player 
const removeSelectedPlayer=(ply)=>{

  console.log('your are clicked delete button',ply)
  const removePlayer =selectedPlayer.filter((p)=>p.player_name !== ply.player_name)
  setSelectedPlayer(removePlayer)
  toast.success(`Delete successfully ${ply.player_name}`)
}
const handleRole =(role)=>{
  setRoles(role)

}

const handleCountry =(country)=>{
  setSelectedCountry(country)
  
}
console.log(selectedCountry)

  return (
   <div className=''>
      <Navbar availableBalance={availableBalance} selectedPlayer={selectedPlayer}></Navbar>
      
      <div className='flex justify-between bg-white min-h-screen'>
        {/* left side  */}
          <div className='w-9/12'>
          
             <SearchBar handleRole={handleRole} 
             handleCountry={handleCountry} 
             
             ></SearchBar>
              <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                    <AvailablePlayers
                    handleSelectedPlayer={handleSelectedPlayer}
                     setAvailableBalance={setAvailableBalance} 
                     availableBalance={availableBalance}
                    playersPromise ={playersPromise}
                     roles={roles}
                     selectedCountry={selectedCountry}
                    >
                   

                    </AvailablePlayers>
              </Suspense>
          </div>
          {/* right side  */}
          <div className='bg-purple-200 w-3/12'>
                <SelectedPlayer
                 selectedPlayer={selectedPlayer}
                 availableBalance={availableBalance}
                 playerPrice={playerPrice}
                 removeSelectedPlayer={removeSelectedPlayer}
                 ></SelectedPlayer>
          </div>
      </div>
      <ToastContainer></ToastContainer>
   </div>

  )
}

export default App
