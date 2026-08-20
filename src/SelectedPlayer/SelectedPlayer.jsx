import React from 'react';
import SelectedPlayerCard from '../components/SelectPlayerCard/SelectedPlayerCard';

const SelectedPlayer = ({selectedPlayer}) => {
    return (
        <div>
            <h1 className='text-black font-bold text-2xl'>Selected Players</h1>
            <div className='p-2'>
                {
                    selectedPlayer.map((selected)=><SelectedPlayerCard selected={selected}></SelectedPlayerCard>)
                }
            </div>
        </div>
    );
};

export default SelectedPlayer;