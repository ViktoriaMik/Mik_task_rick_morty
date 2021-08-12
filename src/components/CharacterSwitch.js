import React  from 'react';
import {useSelector} from "react-redux";
import Characters from "./Characters";
import styles from "./styles.module.css";

const CharacterSwitch=()=> {
    const filterCharacter =useSelector(({characters: {filterCharacter}})=>filterCharacter)
    console.log(filterCharacter)

        return (
            <div>{
                !!filterCharacter.length ? (


                    <div className={styles.character_container}>
                        {filterCharacter.map(character => (
                            <div
                                className={styles.character}

                            >
                                <img className={styles.image} src={character.image}/>
                                <span className={styles.name}>{character.name}</span>
                            </div>
                        ))}
                    </div>
                ): (<Characters/>)
            }

            </div>
        );
    };

export default CharacterSwitch;