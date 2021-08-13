import React, {useEffect} from 'react';
import style from '../styles.module.css'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadOneEpisodes} from "../../redux/action-creator/episodes-action-creator";
import SelectedEpisod from "./SelectedEpisod";

const EpisodesInfo = () => {
    const dispatch = useDispatch();
    const {name} = useParams();
    const oneEpisodes = useSelector(({episodes: {oneEpisode}}) => oneEpisode)

    const selectEpisodes = useSelector(({episodes: {filterEpisodes}}) => filterEpisodes)
    console.log(selectEpisodes)

    useEffect(() => {
        dispatch(loadOneEpisodes(name))
    }, [name])


    return (

        <>{
            !selectEpisodes ? <SelectedEpisod episod={oneEpisodes}/> :
                <div>
                    <div>{selectEpisodes.episode}</div>
                    <div>{selectEpisodes.name}</div>
                    <div>{selectEpisodes.air_date}</div>
                    <img src={`https://rickandmortyapi.com/api/character/avatar/${selectEpisodes.id}.jpeg`}/></div>
        }
        </>

    );
};


export default EpisodesInfo;