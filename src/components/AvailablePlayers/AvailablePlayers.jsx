import React, { use } from 'react';
import AvailablePlayerCard from '../AvailablePlayerCard/AvailablePlayerCard';

const AvailablePlayers = ({playersPromise}) => {
    const players =use(playersPromise)
    console.log(players)
    return (
        <div>
            <div className='w-11/12 mx-auto grid grid-cols-4 gap-4'>
                {
                    players.map(player =><AvailablePlayerCard player={player}></AvailablePlayerCard>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;