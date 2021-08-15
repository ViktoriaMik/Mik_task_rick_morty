import {applyMiddleware, createStore} from "redux";
import {reducers} from "../reducers";
import thunk from "redux-thunk";

const persister=(store)=>(next)=>(action)=>{
    next(action)
    const {watchList}=store.getState()
    localStorage.setItem('watchList', JSON.stringify(watchList))
}

const middlewares=[thunk,persister];
export const store=createStore(reducers,applyMiddleware(...middlewares))
