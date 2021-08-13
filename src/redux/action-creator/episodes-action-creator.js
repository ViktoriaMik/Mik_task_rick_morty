import {SET_CURRENT_PAGE_EPISODES, SET_EPISODES, SET_FILTER_EPISODES} from "../action-type/episodes-action-type";
import {BASEurl} from "../../constant/constatnt";


const setEpisodes = (payload) => ({type: SET_EPISODES, payload});
const setFilterEpisodes = (payload) => ({type: SET_FILTER_EPISODES, payload});
const setCurrentPageEpisodes = (payload) => ({type: SET_CURRENT_PAGE_EPISODES, payload});


const loadEpisodes = (page) => async (dispatch) => {
    try {
        const responce = await fetch(`${BASEurl}episode/?page=${page}`)
        const json = await responce.json()
        console.log(json.results)
        dispatch(setEpisodes(json.results))

    } catch (e) {
        console.log(e)
    }
}

export {
    setEpisodes,
    setFilterEpisodes,
    setCurrentPageEpisodes,
    loadEpisodes
}

