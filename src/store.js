import {configureStore} from '@reduxjs/toolkit'
import { userProfileReducer, userReducer } from './Reducers/User'
import { movies } from './Reducers/Movies'
import { likeDislike } from './Reducers/LikeDislikeMovie'
const store=configureStore({
    reducer:{
        user:userReducer,
        profile:userProfileReducer,
        movies:movies,
        likeDislike:likeDislike
    }
})

export default store