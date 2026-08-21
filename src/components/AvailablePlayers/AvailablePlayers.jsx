import React, { use } from 'react';
import AvailablePlayerCard from '../AvailablePlayerCard/AvailablePlayerCard';

const AvailablePlayers = ({playersPromise,handleSelectedPlayer,setAvailableBalance,availableBalance,roles,selectedCountry,SearchValue}) => {
    const players =use(playersPromise)
  // roles অনুযায়ী প্লেয়ার ফিল্টার করার লজিক
   
        const filteredPlayers = players.filter(player => {
        // ১. Role ফিল্টার শর্ত
        const isRoleMatch = !roles || roles === 'All Roles' || player.role.toLowerCase() === roles.toLowerCase();

        // ২. Country ফিল্টার শর্ত (আপনার JSON ডাটায় দেশের প্রপার্টি 'country' নাকি 'nationality' সে অনুযায়ী নাম মিলিয়ে নেবেন)
        const isCountryMatch = !selectedCountry || selectedCountry === 'All Countries' || player.country_name ?.toLowerCase() === selectedCountry.toLowerCase();
        const isSearchMatch =!SearchValue ||player.player_name ?.toLowerCase()
        .includes(SearchValue.toLowerCase());

        // দুটি শর্তই সত্য হতে হবে (AND Operation)
        return isRoleMatch && isCountryMatch && isSearchMatch;
});

    return (
        <div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    filteredPlayers.length > 0 ? (
                        filteredPlayers.map(player => (
                            <AvailablePlayerCard 
                                key={player.id || player.player_name} // key প্রপ দেওয়া ভালো প্র্যাকটিস
                                handleSelectedPlayer={handleSelectedPlayer}
                                player={player}
                                setAvailableBalance={setAvailableBalance}
                                availableBalance={availableBalance}
                            />
                        ))
                    ) : (
                        // কোনো প্লেয়ার না পাওয়া গেলে মেসেজ দেখাবে
                        <div className='col-span-full text-center py-10 font-bold text-gray-500'>
                            No players found for role "{roles}"
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;