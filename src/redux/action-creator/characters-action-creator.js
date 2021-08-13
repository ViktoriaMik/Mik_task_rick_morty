import {
    DELETE_GENDER_CHARACTERS,
    DELETE_SPECIES_CHARACTERS, DELETE_STATUS_CHARACTERS,
    END_CHARACTERS_LOADING,
    SET_CHARACTERS,
    SET_CURRENT_PAGE, SET_FILTER_CHARACTERS,
    START_CHARACTERS_LOADING
} from "../action-type/characters-action-type";


const setCharacters = (payload) => ({type: SET_CHARACTERS, payload});
const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload});
const setFilterCharacters = (payload) => ({type: SET_FILTER_CHARACTERS, payload});
const deleteSpeciesCharacters = (payload) => ({type: DELETE_SPECIES_CHARACTERS, payload});
const deleteStatusCharacters = (payload) => ({type: DELETE_STATUS_CHARACTERS, payload});
const deleteGenderCharacters = (payload) => ({type: DELETE_GENDER_CHARACTERS, payload});

const loadCharacters = (page) => async (dispatch) => {
    try {
        const responce = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const json = await responce.json()
        console.log(json)
        dispatch(setCharacters(json.results))

    } catch (e) {
        console.log(e)
    }
}
const loadFilterCharacters = (type, value, checked) => async (dispatch) => {
    try {
        console.log(type, value, checked)
        const responce = await fetch(`https://rickandmortyapi.com/api/character/?${type}=${value}`)
        const json = await responce.json()
        if (checked === true) {
            dispatch(setFilterCharacters(json.results))
        } else {
            if (type === 'species') {
                console.log(type === 'species')
                dispatch(deleteSpeciesCharacters(value))
            } else if (type === 'status') {
                dispatch(deleteStatusCharacters(value))
            } else if (type === 'gender') {
                dispatch(deleteGenderCharacters(value))
            }
        }


    } catch (e) {
        console.log(e)
    }
}


export {
    setCharacters,
    loadCharacters,
    setCurrentPage,
    loadFilterCharacters
}