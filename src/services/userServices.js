import { axiosInstance } from "../axios/axiosinstance"


export const carlist=()=>{
return axiosInstance.get("/car/carlist")
}


export const userSignUp=(data)=>{
    return axiosInstance.post("user/signup",data)
}

export const userLogin=(data)=>{
    return axiosInstance.put("user/login",data)
}