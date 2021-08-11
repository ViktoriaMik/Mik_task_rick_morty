import {combineReducers} from "redux";
import {CharactersReducer} from "./characters-reducer";
import {EpisodesReducer} from "./episodes-reducer";

export const reducers = combineReducers({
    characters: CharactersReducer,
    episodes: EpisodesReducer
})