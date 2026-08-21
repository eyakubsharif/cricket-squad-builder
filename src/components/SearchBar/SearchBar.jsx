import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({handleRole,handleCountry}) => {

    const handleChange =(e)=>{
        const value = e.target.value 
   
        handleRole(value)
    }
    const handleCountries =(e)=>{
        const selectedCountry = e.target.value 
        handleCountry(selectedCountry)
    }
    return (
        <div className='flex items-center justify-between py-5 w-11/12 mx-auto '>
            <div className='border border-gray-400 rounded text-black flex items-center px-3 py-2 w-8/12 justify-between'>
                <input type="text" placeholder='Search Players Here' className='text-black outline-none'/>
                <FaSearch color='gray'></FaSearch>
            </div>
                <div className='flex items-center justify-around'>
                    <div>
                <select 
                onChange={handleChange}
                defaultValue="Pick a font" className="select select-ghost text-black bg-white">
                    <option value="All Roles" >All Roles</option>
                    <option value="All-Rounder" >All-Rounder</option>
                    <option value="Batsman">Batsman</option>
                    <option value="Bowler">Bowler</option>
                    <option value="Wicket-Keeper">Wicket-Keeper</option>
                   
                </select>
            </div>
            <div>
                <select onChange={handleCountries} defaultValue="Pick a font" className="select select-ghost text-black bg-white">
                    <option value={`All Countries`}>All Countries</option>
                    <option value={"Bangladesh"}>Bangladesh</option>
                    <option value={"India"}>India</option>
                    <option value={'New Zealand'}>New Zealand</option>
                    <option value={'England'}>England</option>
                    <option value={'Australia'}>Australia</option>
                    <option value={'Afghanistan'}>Afghanistan</option>
                    <option value={'South Africa'}>South Africa</option>
                    <option value={'West Indies'}>West Indies</option>
                </select>
            </div>
                </div>
        </div>
    );
};

export default SearchBar;