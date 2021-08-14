import {SET_CURRENT_PAGE_LOCATION, SET_LOCATION} from "../action-type/location-action-type";
import {BASEurl} from "../../constant/constatnt";

const setLocation = (payload) => ({type: SET_LOCATION, payload});
const setCurrentPageLocation = (payload) => ({type: SET_CURRENT_PAGE_LOCATION, payload});

const loadLocation = (page) => async (dispatch) => {
    try {

        const responce = await fetch(`${BASEurl}location/?page=${page}`)
        const json = await responce.json()
        console.log(json)
        dispatch(setLocation(json.results))

    } catch (e) {
        console.log(e)
    }
}

export {
    setLocation,
    setCurrentPageLocation,
    loadLocation
}