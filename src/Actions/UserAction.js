import axios from "axios"
import { baseUrl } from "../Config/config"

export const LoginUser=(email,password)=>async(dispatch)=>{
    axios.defaults.withCredentials=true
    dispatch({
        type:"loginRequest"
    })
    try {
        const {data}=await axios.post(`https://netflix-clone-apis.vercel.app/api/v1/register`,{email,password},{
            headers: {'Content-Type': 'application/json'}
        })
        dispatch({
            type:"loginSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"loginFailure",
            payload:error
        })  
    }
}