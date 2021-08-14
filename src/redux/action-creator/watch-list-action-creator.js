import {ADD_TO_WATCH_LIST, REMOVE_FROM_WATCH_LIST} from "../action-type/watch-list-action-type";

const addToWatchList=(id)=>({type:ADD_TO_WATCH_LIST,payload:id})
const removeFromWatchList=(id)=>({type:REMOVE_FROM_WATCH_LIST,payload:id})

const toggleEpisodeInWatchList=(id)=>(dispatch,getState)

export{
    addToWatchList,
    removeFromWatchList
}