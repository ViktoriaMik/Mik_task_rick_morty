import React from 'react';

const SelectedEpisod = ({episod}) => {

    return (
        <div key={episod.id}>
            <div>{episod.episode}</div>
            <div>{episod.name}</div>
            <div>{episod.air_date}</div>
            <img src={`https://rickandmortyapi.com/api/character/avatar/${episod.id}.jpeg`}/>

        </div>
    );

}

export default SelectedEpisod;