import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const SelectedPlayerCard = ({selected}) => {
    const {player_img,player_name,role,price}=selected;
    return (
        <div className='flex items-center justify-between text-black p-2 mb-2                                                                                    border border-white rounded-xl shadow-2xl'>
           <div>
                <img className='w-20 h-20 rounded-xl' src={player_img} alt="" />                                        
            </div> 
            <div>
                <p className='text-sm font-bold'>{player_name}</p>
                <p className='text-sm'>{role}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sm font-bold text-purple-600'>{price}</p>
                <p><RxCross2></RxCross2></p>
            </div>
        </div>
    );
};

export default SelectedPlayerCard;