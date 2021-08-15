import React, {Component, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromWatchList} from "../redux/action-creator/watch-list-action-creator";
import styles from './styles.module.css'

const MyWatchList = () => {
    const dispatch=useDispatch();

    const myWatchList = useSelector(({watchList: {watchList}}) => watchList)
   const [markAsComplete,setCompleted]=useState([])
    console.log(markAsComplete)
    const asCompleted=(episod)=>{
        !markAsComplete.includes(episod)&&
        setCompleted([episod, ...markAsComplete])
    }

    return (
        <div style={styles.watchList}>


            {myWatchList.map(episod => (
                <div key={episod.id} className={styles.watch_list} style={{ backgroundColor: markAsComplete.includes(episod) ?'#dcebec':''}}>
                    <img  className={styles.list_img}src={`https://rickandmortyapi.com/api/character/avatar/${episod.id}.jpeg`}/>
                   <div>
                       <div >{episod.episode}</div>
                       <div>{episod.name}</div>
                       <div>{episod.air_date}</div>
                    <button onClick={()=>dispatch(removeFromWatchList(episod.id))}>delete from </button>
                    <button onClick={()=>asCompleted(episod)}>mark as done </button>
                   </div>
                </div>

            ))

            }

        </div>
    );
}

export default MyWatchList;