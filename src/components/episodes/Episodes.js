import React, {Component, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadEpisodes, setCurrentPageEpisodes} from "../../redux/action-creator/episodes-action-creator";
import {Link} from "react-router-dom";

const Episodes = () => {
    const dispatch = useDispatch()
    const episodes = useSelector(({episodes: {episodes}}) => episodes);
    const characters = useSelector(({characters: {characters}}) => characters);
    console.log(episodes)


    const currentPage = useSelector(({episodes: {currentPage}}) => currentPage)

    const pages = []
    for (let i = 0; i < 3; i++) {
        pages.push(i)
    }


    useEffect(() => {
        dispatch(loadEpisodes(currentPage))

    }, [currentPage])

    return (
        <div>
            {episodes.map(episode => (

                <div>
                    <Link to={`/episodes/${episode.name}`}>
                        {episode.name}
                    </Link>
                    <p>{episode.air_date}</p>
                    <h3>{episode.episode}</h3>
                    <img src={`https://rickandmortyapi.com/api/character/avatar/${episode.id}.jpeg`}/>

                    <hr></hr>

                </div>

            ))}
        </div>
    );
}

export default Episodes;