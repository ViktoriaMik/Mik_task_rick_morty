import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    loadEpisodes, loadFilterEpisodes,
    setCurrentPageEpisodes
} from "../../redux/action-creator/episodes-action-creator";
import {Link} from "react-router-dom";
import styles from "../styles.module.css";
import SelectedEpisod from "./SelectedEpisod";
import EpisodesInfo from "./EpisodesInfo";


const Episodes = () => {
    const dispatch = useDispatch()
    const episodes = useSelector(({episodes: {episodes}}) => episodes);
    const currentPage = useSelector(({episodes: {currentPage}}) => currentPage)

    const [value, setValue] = useState('')
    const [searchValue, setSearchValue] = useState('');

    let searchEpisode=episodes.filter(episode=>{
        return episode.name.toLowerCase().includes(searchValue.toLowerCase())
    })



    const pages = []
    for (let i = 1; i < 3; i++) {
        pages.push(i)
    }
    useEffect(() => {
        dispatch(loadEpisodes(currentPage))
        dispatch(loadFilterEpisodes(value))
    }, [currentPage, value])

    return (
        <>
            <select onChange={({target: {value}}) => setValue(value)}>
                <option value={'episode'}>Episode</option>
                {episodes.map(episode => (
                    <option value={episode.name}>{episode.name}</option>
                ))}
            </select>
            <form className={styles.inputHolder}>
                <input type='text' placeholder='Search episode' onChange={({target: {value}})=>setSearchValue(value)}/>
            </form>
            <div className={styles.container_episode}>
                {!!value ? <EpisodesInfo/> :


                    searchEpisode.map(episode => (
                        <>

                            <div className={styles.episode}>
                                <h2>{episode.episode}</h2>
                                <img className={styles.image}
                                     src={`https://rickandmortyapi.com/api/character/avatar/${episode.id}.jpeg`}/>
                                <Link to={`/episodes/${episode.name}`}>
                                    {episode.name}
                                </Link>
                            </div>
                        </>
                    ))}
            </div>
            <div className={styles.bottom}>
                {pages.map(page => (
                    <span
                        onClick={() => dispatch(setCurrentPageEpisodes(page))}
                        className={currentPage === page ? styles.pages : styles.page}>
                            {page}</span>
                ))}
            </div>
        </>
    );
};

export default Episodes;