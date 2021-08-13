import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {BASEurl} from "../../constant/constatnt";

const EpisodesInfo = () => {

    const {name} = useParams()
    const [episode, setEpisode] = useState({})
    console.log(episode)


    const FetchEpisode = async () => {
        const responce = await fetch(`${BASEurl}episode/?name=${name}`)
        const json = await responce.json()
        console.log(json)
        setEpisode(json.results)
    }
    useEffect(() => {
        FetchEpisode()
    }, [])

    return (
        <div>
            {!!episode &&(
                <>
                    <h3>{episode[0].episode}</h3>
                    <p>{episode[0].air_date}</p>
                    <p>{episode[0].created}</p>
                    <img src={`https://rickandmortyapi.com/api/character/avatar/${episode[0].id}.jpeg`}/>
                </>

            )

                }
        </div>
    );
}


export default EpisodesInfo;