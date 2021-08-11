import {
    END_CHARACTERS_LOADING,
    SET_CHARACTERS,
    SET_CURRENT_PAGE,
    START_CHARACTERS_LOADING
} from "../action-type/characters-action-type";


const setCharacters = (payload) => ({type: SET_CHARACTERS, payload});
const startLoading = (payload) => ({type: START_CHARACTERS_LOADING, payload});
const endloading = (payload) => ({type: END_CHARACTERS_LOADING, payload});
const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload});

const loadCharacters = (page) => async (dispatch) => {
    try {
        dispatch(startLoading())
        const responce = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const json = await responce.json()
        console.log(json)
        dispatch(setCharacters(json.results))

    } catch (e) {
        console.log(e)
    } finally {
        dispatch(endloading())
    }


}


export {
    setCharacters,
    startLoading,
    endloading,
    loadCharacters,
    setCurrentPage
}