import {IUser} from "../models/user";
import api,{CommonResult,getCommonResultModel} from "./api";


export class UserService{
    
    public static async getAllUsers():Promise<CommonResult<Array<IUser>>>{
        let result=getCommonResultModel<Array<IUser>>();
        try{
            result.data=await api.get("users").then<Array<IUser>>(resp=>resp.data);
        }catch(ex:any){
            result.status=false;
            result.message=ex.message;
        }
        return result;
    }
    
}