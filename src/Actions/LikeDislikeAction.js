import axios from "axios"
import { baseUrl } from "../Config/config"
import { loadUser } from "./UserAction"
import { toast } from "react-hot-toast"

const token=localStorage.getItem("token")
export const likeDislike=(poster_path)=>async(dispatch)=>{
    dispatch({
        type:"likeDislikeRequest"
    })
    try {
        const {data}=await axios.post(`${baseUrl}/likeDislike`,{poster_path},{
            headers: {'Content-Type': 'application/json',
            "Authorization":`${token}`
        }
        })
        toast.success(data.message)
        dispatch({type:"clearMessage"})
        dispatch(loadUser())
        dispatch({
            type:"likeDislikeSuccess",
            payload:data
        })
    } catch (error) {
     
        dispatch({
            type:"likeDislikeFailure",
            payload:error
        })  
    }
}
export const dislike=(poster_path)=>async(dispatch)=>{
    dispatch({
        type:"dislikeRequest"
    })
    try {
        const {data}=await axios.post(`${baseUrl}/dislikeThePost`,{poster_path},{
            headers: {'Content-Type': 'application/json',
            "Authorization":`${token}`
        }
        })
        toast.success(data.message)
        dispatch({type:"clearMessage"})
        dispatch(loadUser())
        dispatch({
            type:"dislikeSuccess",
            payload:data
        })
    } catch (error) {
     
        dispatch({
            type:"dislikeFailure",
            payload:error
        })  
    }
}
export const Listing=(poster_path)=>async(dispatch)=>{
    dispatch({
        type:"listingRequest"
    })
    try {
        const {data}=await axios.post(`${baseUrl}/addListing`,{poster_path},{
            headers: {'Content-Type': 'application/json',
            "Authorization":`${token}`
        }
        })
        toast.success(data.message)
        dispatch({type:"clearMessage"})
        dispatch(loadUser())
        dispatch({
            type:"listingSuccess",
            payload:data
        })
    } catch (error) {
     
        dispatch({
            type:"listingFailure",
            payload:error
        })  
    }
}

