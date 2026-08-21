import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AvailablePlayerCard = ({player,handleSelectedPlayer,setAvailableBalance,availableBalance}) => {
    const [isVisited,setIsVisited]=useState(false)
    const buttonHandler =()=>{

        
        if(availableBalance <=1000){
            toast.warning("Sorry !! you don't have enough money")
            return
        }else{
            handleSelectedPlayer(player)
            setAvailableBalance(availableBalance-player.price)
        toast.success(`Congratulation you are selected ${player.player_name}`)
        }
          setIsVisited(true)
        
    }
  
 const {player_name,country_name,flag,player_img,batting_style,bowling_style,role,price,rating}=player
    return (
        <div className='text-black border border-white rounded-xl p-2 shadow-2xl bg-green-100'>
            <img className='w-full h-40 rounded-xl' src={player_img} alt="" />
            <h1 className='font-bold text-sm mt-2 border-b border-gray-200'>Name :{player_name}</h1>
            <div className='flex items-center gap-2'>
                <span><img className='w-6 h-3 rounded' src={flag} alt="" /></span>
                <span className='text-sm'>{country_name}</span><span className='text-[#0026FF] font-bold pl-5'>{price}$</span>
            </div>
            <p className='text-xs'>Bowling : { bowling_style}</p>
            <p className='text-xs'>Batting : { batting_style}</p>
            <div className='flex items-center justify-between mt-2'>
                <p className='text-xs bg-green-50 px-2 text-red-500 py-1' >{role}</p>
                <p className='text-xs flex items-center gap-1'>Rating : { rating} <FaStar color={"#ffd700"}></FaStar></p>
            </div>
            <button disabled={isVisited} onClick={()=>buttonHandler(player)} className={`${isVisited?"bg-gray-400 px-3 py-1 rounded w-full":"btn btn-primary mt-2 w-full"}`}>{isVisited ?"Selected":"Choose Player"}</button>

        </div>
    );
};

export default AvailablePlayerCard;