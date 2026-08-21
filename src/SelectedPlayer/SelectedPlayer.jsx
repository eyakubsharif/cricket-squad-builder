import React, { useState } from 'react';
import SelectedPlayerCard from '../components/SelectPlayerCard/SelectedPlayerCard';

const SelectedPlayer = ({selectedPlayer,availableBalance,playerPrice,removeSelectedPlayer}) => {
    console.log(selectedPlayer)

   return (
        <div>
            <h1 className='text-black font-bold text-2xl'>Selected Players</h1>
            <div className='p-2'>
                {
                    selectedPlayer.map((selected)=> <SelectedPlayerCard removeSelectedPlayer={removeSelectedPlayer}  selected={selected}></SelectedPlayerCard>)
                }
                {
                    selectedPlayer.length===0 ?"" : <div className='p-5'>
                    <p className='font-bold text-sm flex justify-between text-black items-center'>Total Price  <p className='text-red-500'><span >{playerPrice}</span>$</p></p>
                <p className='font-bold text-sm flex justify-between items-center text-black'>Remaining Budget  <p className='text-blue-500'><span >{availableBalance}</span>$</p></p>
                
                </div>
                }
            </div>
        </div>
    );
};

export default SelectedPlayer;