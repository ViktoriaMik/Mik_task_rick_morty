import React from 'react';
import styles from './styles.modal.css'


const CharacterInfo = ({active, setActive}) => {
    console.log(active)
    return (
        <div className={active ? styles.active : styles.modal}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>


                <button className={styles.btn} onClick={() => setActive(false)}>CLOSE</button>

            </div>

        </div>
    );
}


export default CharacterInfo;