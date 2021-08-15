import React, {useEffect, useState} from 'react';
import {loadCharacters, setCurrentPage} from "../../redux/action-creator/characters-action-creator";
import {useDispatch, useSelector} from "react-redux";
import styles from '../styles.module.css'
import CharacterInfo from "../popup/character-info";

const Characters = () => {
    const dispatch = useDispatch();

    const [modalActive, setModalActive] = useState(false);
    const [characterInfo,setCharacterInfo] = useState();

    const currentPage = useSelector(({characters: {currentPage}}) => currentPage)
    const pages = []
    for(let i=1;i<21;i++)    {
        pages.push(i)
    }

    const characters = useSelector(({characters: {characters}}) => characters)
    console.log(characters)

    useEffect(() => {
        dispatch(loadCharacters(currentPage))
    }, [currentPage])
    return (
        <div>

            <CharacterInfo active={modalActive} setActive={setModalActive} character={characterInfo}/>

            <div className={styles.character_container}>
                {characters.map(character => (
                    <div
                        className={styles.character}
                        onClick={() => {
                            setModalActive(true)
                            setCharacterInfo(character)
                        }}
                    >
                        <img className={styles.image} src={character.image}/>
                        <span className={styles.name}>{character.name}</span>
                    </div>
                ))}
            </div>
            <div className={styles.bottom}>
                {pages.map(page => (
                    <span
                        onClick={() => dispatch(setCurrentPage(page))}
                        className={currentPage === page ? styles.pages : styles.page}>
                            {page}</span>

                ))}
            </div>

        </div>
    );
}

export default Characters;