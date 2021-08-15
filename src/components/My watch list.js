import React, {Component} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromWatchList} from "../redux/action-creator/watch-list-action-creator";
import styles from './styles.module.css'

const MyWatchList = () => {
    const dispatch=useDispatch();

    const myWatchList = useSelector(({watchList: {watchList}}) => watchList)
    console.log(myWatchList)

    return (
        <div>


            {myWatchList.map(episod => (
                <div style={styles.watchList}>
                    <div >{episod.episode}</div>
                    <div>{episod.name}</div>
                    <div>{episod.air_date}</div>
                    <img  style={styles.list_img}src={`https://rickandmortyapi.com/api/character/avatar/${episod.id}.jpeg`}/>
                    <button onClick={()=>dispatch(removeFromWatchList(episod.id))}>delete from </button>
                </div>

            ))

            }

        </div>
    );
}

export default MyWatchList;