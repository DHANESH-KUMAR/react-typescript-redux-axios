import axios,{AxiosRequestConfig} from "axios";



const instance=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use((config:AxiosRequestConfig)=>{
    let accessToken=null;
    if(accessToken!=null){
        if (config.headers)
            config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
},(error)=>{
    return Promise.reject(error);
});

export default instance;


//if we want to use some common response for every api then we can use this 
export interface CommonResult<T>{
    status:boolean;
    message:string;
    data:T|null;
}
export function getCommonResultModel<T>():CommonResult<T>{
    return {data:null,message:"",status:true}
}