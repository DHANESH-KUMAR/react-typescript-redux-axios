import {IUser} from "../../models/user";
import {UserActionType as ActionType} from "../action-types/userActionType"


interface GetAllUsers{
    type:ActionType.GET_ALL_USERS;
}

interface GetAllUserSuccess{
    type:ActionType.GET_ALL_USERS_SUCCESS;
    payload:Array<IUser>;
}

interface GetAllUserError{
    type:ActionType.GET_ALL_USERS_ERROR;
    payload:string;
}

export type UserActionTypeGuard=(
    GetAllUsers|GetAllUserSuccess|GetAllUserError
)