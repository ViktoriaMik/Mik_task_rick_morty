import React, {Component} from 'react';
import {useSelector} from "react-redux";

const  MyWatchList=()=> {
    const myWatchList=useSelector(({watchList:{watchList}})=>watchList)
    console.log(myWatchList)

        return (
            <div>
                MyWatchList
            </div>
        );
    }

export default MyWatchList;