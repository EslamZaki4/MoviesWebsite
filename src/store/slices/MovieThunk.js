import {createAsyncThunk ,createSlice} from '@reduxjs/toolkit'

import axiosInstance from './../../Components/axios/instance'




  export const moviesAction= createAsyncThunk("movies/getAll",async(id=1)=>{
    try{
    var res=await axiosInstance.get(`/movie/popular?language=en-US&page=${id}`)
      // console.log("response", res.data.results);
       return res.data.results;//action return to me new array that change movies ..it return promise
    }catch(err){
      console.error("Error:", err);
      throw  Error;  
     }  
    }
  );

const movieSlice = createSlice({
    name: 'movies',
    initialState: {movies: []},
                
    extraReducers:(builder)=> {  //if promise 
      // function Async=> it return promise
              //addCase=>handle the promise
      //  builder.addCase(moviesAction.pending, (state, action) => {
      //   state.movies = [];
      // });
      builder.addCase(moviesAction.fulfilled, (state, action) => {
        state.movies = action.payload;
        
      });

  //    builder.addCase(moviesAction.rejected, (state, action) => {
  //    state.movies;})


   } });
   
export default movieSlice.reducer;