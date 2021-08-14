import {combineReducers} from "redux";
import {CharactersReducer} from "./characters-reducer";
import {EpisodesReducer} from "./episodes-reducer";
import {LocationReducer} from "./location-reducer";
import {WatchListReducer} from "./watch-list-reducer";

export const reducers = combineReducers({
    characters: CharactersReducer,
    episodes: EpisodesReducer,
    location:LocationReducer,
    watchList:WatchListReducer
})