import {configureStore} from '@reduxjs/toolkit'
import { tokenReducer, userProfileReducer, userReducer } from './Reducers/User'
import { movies } from './Reducers/Movies'
import { likeDislike } from './Reducers/LikeDislikeMovie'
const store=configureStore({
    reducer:{
        user:userReducer,
        profile:userProfileReducer,
        movies:movies,
        likeDislike:likeDislike,
        token:tokenReducer
    }
})

export default store