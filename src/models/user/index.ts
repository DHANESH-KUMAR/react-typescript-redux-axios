export interface Geo{
    lat:number;
    lng:number;
}

export interface IAddress{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:Geo
}
export interface ICompany{
    name:string;
    catchPhrase:string;
    bs:string;
}
export interface IUser{
    id:string;
    name:string;
    username:string;
    email:string;
    address:IAddress;
    phone:string;
    website:string;
    company:ICompany;
}