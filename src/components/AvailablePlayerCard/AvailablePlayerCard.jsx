import React from 'react';
import { FaStar } from 'react-icons/fa';

const AvailablePlayerCard = ({player}) => {
    console.log(player)
 const {player_name,country_name,flag,player_img,batting_style,bowling_style,role,price,rating}=player
    return (
        <div className='text-black border border-gray-200 rounded-xl p-2 shadow-xl'>
            <img className='w-full h-40 rounded-xl' src={player_img} alt="" />
            <h1 className='font-bold text-sm mt-2 border-b border-gray-200'>Name :{player_name}</h1>
            <div className='flex items-center gap-2'>
                <span><img className='w-6 h-3 rounded' src={flag} alt="" /></span>
                <span>{country_name}</span><span className='text-[#0026FF] font-bold'>{price}$</span>
            </div>
            <p className='text-xs'>Bowling :{bowling_style}</p>
            <p className='text-xs'>Batting :{batting_style}</p>
            <div className='flex items-center justify-between mt-2'>
                <p className='text-xs bg-green-50 px-2 text-red-500 py-1' >{role}</p>
                <p className='text-xs flex items-center gap-1'>Rating : { rating} <FaStar color={"#ffd700"}></FaStar></p>
            </div>
            <button className='btn btn-primary mt-2 w-full'>Choose Player</button>

        </div>
    );
};

export default AvailablePlayerCard;