import {Dispatch} from "redux";
import {UserActionType as ActionType} from "../action-types/userActionType";
import {UserActionTypeGuard} from "../action-guard/userActionTypeGuard"
import {UserService } from "../../services/user-service"

const getAllUsers=():any=>{
    return (async (dispatch:Dispatch<UserActionTypeGuard>)=>{
        return new Promise(async(resolve,reject)=>{
            //initial-one
            dispatch({type:ActionType.GET_ALL_USERS});
            let result = await UserService.getAllUsers();
            console.log("action-creator-side", result)
            if(result.data!==null){
                dispatch({type:ActionType.GET_ALL_USERS_SUCCESS,payload:result.data});
                resolve('success-flag')
            }else{
                dispatch({type:ActionType.GET_ALL_USERS_ERROR,payload:result.message});
                reject('error-flag')
            }
        });
    });
}

export const User_AC={
    getAllUsers
}