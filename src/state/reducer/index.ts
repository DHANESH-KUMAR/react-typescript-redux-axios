import {combineReducers } from "redux";
import {UserReducerState,userReducer } from "./userReducer";



export interface IApplicationState{
    user:UserReducerState
}

//we have multiple reducer then combine them in single-one
const reducer=combineReducers({
    user:userReducer
});

export default reducer;
