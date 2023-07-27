import axios from "axios"
import { moviesBasUrl } from "../Config/config"
import { moviesToken } from "../Config/config"


export const trendingMovies=()=>async(dispatch)=>{
    dispatch({
        type:"trendingMoviesRequest"
    })
    try {
        const {data}=await axios.get(`${moviesBasUrl}/trending/movie/day`,{
            headers:{
                "Authorization":`Bearer ${moviesToken}`
            }
        })
        dispatch({
            type:"trendingMoviesSuccess",
            payload:data
        })
    } catch (error) {
     
        dispatch({
            type:"trendingMoviesFailure",
            payload:error
        })  
    }
}
export const relaseMovies=()=>async(dispatch)=>{
    dispatch({
        type:"newReleasesRequest"
    })
    try {
        const {data}=await axios.get(`${moviesBasUrl}/movie/upcoming`,{
            headers:{
                "Authorization":`Bearer ${moviesToken}`
            }
        })
        dispatch({
            type:"newReleasesSuccess",
            payload:data
        })
    } catch (error) {
     
        dispatch({
            type:"newReleasesFailure",
            payload:error
        })  
    }
}
export const popularMovies=()=>async(dispatch)=>{
    dispatch({
        type:"popularRequest"
    })
    try {
        const {data}=await axios.get(`${moviesBasUrl}/tv/popular`,{
            headers:{
                "Authorization":`Bearer ${moviesToken}`
            }
        })
        dispatch({
            type:"popularSuccess",
            payload:data
        })
    } catch (error) {
     
        dispatch({
            type:"popularFailure",
            payload:error
        })  
    }
}
export const blockBuster=()=>async(dispatch)=>{
    dispatch({
        type:"BlockbusterRequest"
    })
    try {
        const {data}=await axios.get(`${moviesBasUrl}/tv/top_rated`,{
            headers:{
                "Authorization":`Bearer ${moviesToken}`
            }
        })
        dispatch({
            type:"BlockbusterSuccess",
            payload:data
        })
    } catch (error) {
     
        dispatch({
            type:"BlockbusterFailure",
            payload:error
        })  
    }
}