import {
    DELETE_FILTER_CHARACTERS, DELETE_GENDER_CHARACTERS, DELETE_SPECIES_CHARACTERS, DELETE_STATUS_CHARACTERS,
    END_CHARACTERS_LOADING,
    SET_CHARACTERS,
    SET_CURRENT_PAGE, SET_FILTER_CHARACTERS,
    START_CHARACTERS_LOADING
} from "../action-type/characters-action-type";

const initialState = {
    characters: [],
    filterCharacter:[],
    isLoading: false,
    currentPage: 1

}

export const CharactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS: {
            return {...state, characters: action.payload}
        }
        case SET_FILTER_CHARACTERS: {
            return {...state, filterCharacter: [...state.filterCharacter,...action.payload]}
        }
        case DELETE_SPECIES_CHARACTERS: {
            return {...state, filterCharacter: state.filterCharacter.filter(el=>el.species !== action.payload)}
        }
        case DELETE_STATUS_CHARACTERS: {
            return {...state, filterCharacter: state.filterCharacter.filter(el=>el.status !== action.payload)}
        }
        case DELETE_GENDER_CHARACTERS: {
            return {...state, filterCharacter: state.filterCharacter.filter(el=>el.gender !== action.payload)}
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