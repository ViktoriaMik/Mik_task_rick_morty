import {
    END_LOADING,
    SET_CURRENT_PAGE_EPISODES,
    SET_EPISODES,
    SET_FILTER_EPISODES,
    SET_ONE_EPISODES, START_LOADING
} from "../action-type/episodes-action-type";
import {SET_CURRENT_PAGE_LOCATION, SET_LOCATION} from "../action-type/location-action-type";

const initialState = {
    location: [],
    currentPage: 1,
}

export const LocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION: {
            return {...state, location: action.payload}
        }

        case SET_CURRENT_PAGE_LOCATION: {
            return {...state, currentPage: action.payload}
        }
        default:
            return state
    }
}