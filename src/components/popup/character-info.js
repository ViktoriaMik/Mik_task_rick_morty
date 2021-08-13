import React from 'react';
import styles from './styles.module.css'


const CharacterInfo = ({active, setActive, character}) => {

    console.log(active)
    return (
        <div className={active ? styles.active : styles.modal}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                {!!character && (<div>
                    <h2>{character.name}</h2>
                    <img  src={character.image}/>
                    <p>Species:{character.species}</p>
                    <p>Status:{character.status}</p>


                </div>)}

                <button className={styles.btn} onClick={() => setActive(false)}>CLOSE</button>

            </div>

        </div>
    );
}


export default CharacterInfo;