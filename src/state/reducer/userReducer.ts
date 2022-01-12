import {IUser} from "../../models/user";

import {UserActionType as ActionType} from "../action-types/userActionType";
import {UserActionTypeGuard as Action} from "../action-guard/userActionTypeGuard";


export interface UserReducerState{
    Users:Array<IUser>;
    GET_ALL_LOADER?:boolean;
    GET_ALL_ERR_MSG?:string;
}

const initialState=(function():UserReducerState{
    return {
        Users:[],
        GET_ALL_LOADER:false,
        GET_ALL_ERR_MSG:""
    }
})();

export const userReducer=(state:UserReducerState=initialState,action:Action)=>{
    switch(action.type){

        case ActionType.GET_ALL_USERS:{
            return {...state,GET_ALL_LOADER:true}
        }
        case ActionType.GET_ALL_USERS_SUCCESS:{
            return {...state,GET_ALL_LOADER:false,Users:[...action.payload]}
        }
        case ActionType.GET_ALL_USERS_ERROR:{
            return {...state,GET_ALL_LOADER:false,Users:[],GET_ALL_ERR_MSG:action.payload}
        }

        default:
            return state;
    }
}