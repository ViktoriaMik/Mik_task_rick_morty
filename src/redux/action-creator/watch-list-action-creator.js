import {ADD_TO_WATCH_LIST, REMOVE_FROM_WATCH_LIST} from "../action-type/watch-list-action-type";

const addToWatchList = (payload) => ({type: ADD_TO_WATCH_LIST, payload})
const removeFromWatchList = (payload) => ({type: REMOVE_FROM_WATCH_LIST, payload})

const toggleEpisodeInWatchList = (episode) => (dispatch, getState) => {
    console.log(getState(), episode)
    const {watchList: {watchList}} = getState()


    const alreadyExist = watchList.includes(episode);
    console.log(alreadyExist)
    dispatch( addToWatchList(episode) )
    // dispatch(alreadyExist ? removeFromWatchList(episode) : (addToWatchList(episode)))

}

export {
    addToWatchList,
    removeFromWatchList,
    toggleEpisodeInWatchList
}