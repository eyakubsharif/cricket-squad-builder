import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import logo from "../../assets/cricket-logo.png"

const Navbar = ({selectedPlayer}) => {
    return (
            <div className='bg-black '>
                <div className='flex flex-col md:flex-row md:justify-between w-11/12 mx-auto text-white py-1'>
                <div className='flex items-center gap-2'>
                    <img className='w-12 h-12 md:w-15 md:h-15' src={logo} alt="" />
                    <h1 className='font-bold md:text-2xl'>Cricket Squad Builder</h1>
                </div>
                <div className='flex items-center justify-between md:justify-end gap:6 md:gap-10'>
                    <div>
                        <p className='font-bold text-xs'>Budget</p>
                        <p className='text-sm font-bold text-purple-500'><span>8500</span>$</p>
                    </div>
                    <div>
                        <p className='font-bold text-xs'>Selected</p>
                        <p className='text-sm font-bold text-amber-500'>{`${selectedPlayer.length}/12`}</p>
                    </div>
                    <div>
                        <button className='flex items-center cursor-pointer gap-2 md:gap-4 text-xs md:text-sm bg-red-600 px-4 py-2 rounded-sm font-bold shadow-2xl text-white'> <RiDeleteBin6Line></RiDeleteBin6Line> Clear Squad</button>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Navbar;