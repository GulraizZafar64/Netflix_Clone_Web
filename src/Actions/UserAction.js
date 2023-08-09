import axios from "axios"
import { baseUrl } from "../Config/config"


export const LoginUser=(email,password)=>async(dispatch)=>{
    dispatch({
        type:"loginRequest"
    })
    dispatch({
        type:"tokenRequest",
    })
    try {
        const {data}=await axios.post(`${baseUrl}/login`,{email,password},{
            headers: {'Content-Type': 'application/json'}
        })
        localStorage.setItem('token', data.token);
        localStorage.setItem('loginUser', JSON.stringify(data));
        dispatch({
            type:"tokenSuccess",
            payload:data.token
        })
        dispatch({
            type:"loginSuccess",
            payload:data
        })
        dispatch(loadUser(data.token))
    } catch (error) {
     
        dispatch({
            type:"loginFailure",
            payload:error.response.data
        })  
        dispatch({
            type:"tokenFailure",
            payload:null
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
        dispatch(loadUser(data.token))
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
export const loadUser=(token)=>async(dispatch)=>{
    console.log(token)
  if(token){
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
}
export const setToken=(token)=>async(dispatch)=>{
        dispatch({
            type:"tokenSuccess",
            payload:token
        })
  
}
