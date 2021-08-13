import {
    END_LOADING,
    SET_CURRENT_PAGE_EPISODES,
    SET_EPISODES,
    SET_FILTER_EPISODES,
    SET_ONE_EPISODES, START_LOADING
} from "../action-type/episodes-action-type";
import {BASEurl} from "../../constant/constatnt";


const setEpisodes = (payload) => ({type: SET_EPISODES, payload});
const setOneEpisodes = (payload) => ({type: SET_ONE_EPISODES, payload});
const setFilterEpisodes = (payload) => ({type: SET_FILTER_EPISODES, payload});
const setCurrentPageEpisodes = (payload) => ({type: SET_CURRENT_PAGE_EPISODES, payload});
const startLoading=()=>({type:START_LOADING})
const endLoading=()=>({type:END_LOADING})


const loadEpisodes = (page) => async (dispatch) => {
    try {
        dispatch(startLoading())
        const responce = await fetch(`${BASEurl}episode/?page=${page}`)
        const json = await responce.json()
        console.log(json.results)
        dispatch(setEpisodes(json.results))

    } catch (e) {
        console.log(e)
    }finally {
        dispatch(endLoading())
    }
}
const loadOneEpisodes = (name) => async (dispatch) => {
    try {
        dispatch(startLoading())
        const responce = await fetch(`${BASEurl}episode/?name=${name}`)
        const json = await responce.json()
        console.log(json.results)
        dispatch(setOneEpisodes(json.results[0]))

    } catch (e) {
        console.log(e)
    }finally {
        dispatch(endLoading())
    }
}
const loadFilterEpisodes = (name) => async (dispatch) => {
    try {
        dispatch(startLoading())
        const responce = await fetch(`${BASEurl}episode/?name=${name}`)
        const json = await responce.json()
        console.log(json.results[0])
        dispatch(setFilterEpisodes(json.results[0]))

    } catch (e) {
        console.log(e)
    }finally {
        dispatch(endLoading())
    }
}

export {
    setEpisodes,
    setFilterEpisodes,
    setCurrentPageEpisodes,
    loadEpisodes,
    loadOneEpisodes,
   loadFilterEpisodes
}

