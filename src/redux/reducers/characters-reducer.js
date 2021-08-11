import {
    END_CHARACTERS_LOADING,
    SET_CHARACTERS,
    SET_CURRENT_PAGE,
    START_CHARACTERS_LOADING
} from "../action-type/characters-action-type";

const initialState = {
    characters: [],
    isLoading: false,
    currentPage: 1

}

export const CharactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS: {
            return {...state, characters: action.payload}
        }
        case START_CHARACTERS_LOADING: {
            return {...state, isLoading: true}
        }
        case END_CHARACTERS_LOADING: {
            return {...state, isLoading: false}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload}
        }


        default:
            return state
    }
}