
import {SET_CURRENT_PAGE_EPISODES, SET_EPISODES, SET_FILTER_EPISODES} from "../action-type/episodes-action-type";

const initialState = {
    episodes: [],
    filterEpisodes:[],
    currentPage: 1

}

export const EpisodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EPISODES: {
            return {...state, episodes: action.payload}
        }
        case SET_FILTER_EPISODES: {
            return {...state, filterEpisodes: [...state.filterEpisodes,...action.payload]}
        }
        // case DELETE_SPECIES_CHARACTERS: {
        //     return {...state, filterEpisodes: state.filterEpisodes.filter(el=>el.species !== action.payload)}
        // }

        case SET_CURRENT_PAGE_EPISODES: {
            return {...state, currentPage: action.payload}
        }


        default:
            return state
    }
}