import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Characters from "./Characters";
import styles from "../styles.module.css";
import CharacterInfo from "../popup/character-info";

const CharacterSwitch = () => {
    const filterCharacter = useSelector(({characters: {filterCharacter}}) => filterCharacter)

    const [modalActive, setModalActive] = useState(false);
    const [characterInfo,setCharacterInfo] = useState();

    return (
        <div>{
            !!filterCharacter.length ? (

                <>
                    <CharacterInfo active={modalActive} setActive={setModalActive} character={characterInfo}/>

                    <div className={styles.character_container}>
                        {filterCharacter.map(character => (
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
                </>
            ) : (<Characters/>)
        }

        </div>
    );
};

export default CharacterSwitch;