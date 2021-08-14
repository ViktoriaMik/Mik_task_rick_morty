import {ADD_TO_WATCH_LIST, REMOVE_FROM_WATCH_LIST} from "../action-type/watch-list-action-type";

const addToWatchList = (payload) => ({type: ADD_TO_WATCH_LIST, payload})
const removeFromWatchList = (id) => ({type: REMOVE_FROM_WATCH_LIST, payload: id})

const toggleEpisodeInWatchList = (episode) =>  (dispatch, getState) => {

    const {watchList: {watchList}} = getState()

    const alreadyExist =  watchList.includes(episode);

    alreadyExist ? console.log('already') : console.log('NOT')
    if(alreadyExist){
        dispatch(removeFromWatchList(episode.id))
    }else{
        dispatch(addToWatchList(episode))

    }

}

export {
    addToWatchList,
    removeFromWatchList,
    toggleEpisodeInWatchList
}