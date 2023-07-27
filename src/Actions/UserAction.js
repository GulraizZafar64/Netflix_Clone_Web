import axios from "axios"
import { baseUrl } from "../Config/config"

const token=localStorage.getItem("token")
export const LoginUser=(email,password)=>async(dispatch)=>{
    dispatch({
        type:"loginRequest"
    })
    try {
        const {data}=await axios.post(`${baseUrl}/login`,{email,password},{
            headers: {'Content-Type': 'application/json'}
        })
        localStorage.setItem("token",data.token)
        dispatch(loadUser2(data.token))
        dispatch({
            type:"loginSuccess",
            payload:data
        })
    } catch (error) {
     
        dispatch({
            type:"loginFailure",
            payload:error.response.data
        })  
    }
}
export const registerUser=(email,password)=>async(dispatch)=>{
    dispatch({
        type:"registerRequest"
    })
    try {
        const {data}=await axios.post(`${baseUrl}/register`,{email,password},{
            headers: {'Content-Type': 'application/json'}
        })
        localStorage.setItem("token",data.token)
        dispatch(loadUser())
        dispatch({
            type:"registerSuccess",
            payload:data
        })
    } catch (error) {
     
        dispatch({
            type:"registerFailure",
            payload:error.response.data
        })  
    }
}
export const loadUser=()=>async(dispatch)=>{
    dispatch({
        type:"loadUserRequest"
    })
    try {
        const {data}=await axios.get(`${baseUrl}/me`,{
            headers:{
                "Authorization":`${token}`
            }

        })
        dispatch({
            type:"loadUserSuccess",
            payload:data.user
        })
    } catch (error) {
     
        dispatch({
            type:"loadUserFailure",
            payload:error.response.data
        })  
    }
}
export const loadUser2=(token2)=>async(dispatch)=>{
    dispatch({
        type:"loadUserRequest"
    })
    try {
        const {data}=await axios.get(`${baseUrl}/me`,{
            headers:{
                "Authorization":`${token2}`
            }

        })
        dispatch({
            type:"loadUserSuccess",
            payload:data.user
        })
    } catch (error) {
     
        dispatch({
            type:"loadUserFailure",
            payload:error.response.data
        })  
    }
}