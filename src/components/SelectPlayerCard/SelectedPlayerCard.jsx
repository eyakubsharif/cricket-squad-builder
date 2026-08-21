import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const SelectedPlayerCard = ({selected,removeSelectedPlayer}) => {
    const {player_img,player_name,role,price}=selected;
    const colorClasses = [
        'text-red-500',
        'text-blue-500',
        'text-green-500',
        'text-amber-500',
        'text-purple-500',
        'text-pink-500',
        'text-teal-500',
        'text-indigo-500'
    ];
    const randomColor =colorClasses[Math.floor(Math.random()*colorClasses.length)]
const handleDelete =(p)=>{
    removeSelectedPlayer(p)
}

    return (
        <div className='flex items-center justify-between text-black px-5 py2 md:p-2 bg-white mb-2                                                                                    border border-white rounded-xl shadow-2xl'>
           <div>
                <img className='w-20 h-20 rounded-xl' src={player_img} alt="" />                                        
            </div> 
            <div>
                <p className='text-sm font-bold'>{player_name}</p>
                <p className={`text-sm ${randomColor}`}>{role}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sm font-bold text-purple-600'>{price}</p>
                <span onClick={()=>handleDelete(selected)}><RxCross2></RxCross2></span>
            </div>
        </div>
    );
};

export default SelectedPlayerCard;