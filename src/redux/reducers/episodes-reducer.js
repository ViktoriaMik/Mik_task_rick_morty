import {
    END_LOADING,
    SET_CURRENT_PAGE_EPISODES,
    SET_EPISODES,
    SET_FILTER_EPISODES,
    SET_ONE_EPISODES, START_LOADING
} from "../action-type/episodes-action-type";

const initialState = {
    episodes: [],
    oneEpisode: [],
    filterEpisodes: [],
    currentPage: 1,
    loading: false

}

export const EpisodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EPISODES: {
            return {...state, episodes: action.payload}
        }
        case SET_ONE_EPISODES: {
            return {...state, oneEpisode: action.payload}
        }
        case SET_FILTER_EPISODES: {
            return {...state, filterEpisodes: action.payload}
        }
        case START_LOADING: {
            return {...state, loading: true}
        }
        case END_LOADING: {
            return {...state, loading: true}
        }
        case SET_CURRENT_PAGE_EPISODES: {
            return {...state, currentPage: action.payload}
        }
        default:
            return state
    }
}