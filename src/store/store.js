import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./slices/fav";
import moviesReducer from "./slices/MovieThunk";
const store = configureStore(
    {
        reducer:{
            
            favorites: favoritesReducer,
            movies: moviesReducer,
        }
    }
)
//it space.. because we not dispatch to action
// movies:[]
export default store