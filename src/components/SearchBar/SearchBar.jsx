import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className='flex items-center justify-between py-5 w-11/12 mx-auto '>
            <div className='border border-gray-400 rounded text-black flex items-center px-3 py-2 w-8/12 justify-between'>
                <input type="text" placeholder='Search Players Here' className='text-black outline-none'/>
                <FaSearch color='gray'></FaSearch>
            </div>
                <div className='flex items-center justify-around'>
                    <div>
                <select defaultValue="Pick a font" className="select select-ghost text-black bg-white">
                    <option disabled={true}>All Roles</option>
                    <option>All-Rounder</option>
                    <option>Batsman</option>
                    <option>Bowler</option>
                    <option>Wicket-Keeper</option>
                   
                </select>
            </div>
            <div>
                <select defaultValue="Pick a font" className="select select-ghost text-black bg-white">
                    <option disabled={true}>All Countries</option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>New Zealand</option>
                    <option>England</option>
                    <option>Australia</option>
                    <option>Afghanistan</option>
                    <option>South Africa</option>
                    <option>West Indies</option>
                </select>
            </div>
                </div>
        </div>
    );
};

export default SearchBar;