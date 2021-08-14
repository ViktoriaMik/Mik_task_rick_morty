import {ADD_TO_WATCH_LIST, REMOVE_FROM_WATCH_LIST} from "../action-type/watch-list-action-type";

const initialState = {
    watchList: [],

}

export const WatchListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WATCH_LIST: {
            return {...state, watchList: action.payload}
        }

        case REMOVE_FROM_WATCH_LIST: {
            return {...state, watchList: ''}
        }
        default:
            return state
    }
}