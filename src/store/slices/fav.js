import {  createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice(
{
name:'favorites',
initialState:{favorites : []},
reducers :{
    
    
    addFav:(state ,action)=>{
        const {id} = action.payload;
        const index = state.favorites.findIndex(f=>f.id === id);
        
        if (index !== -1){
            state.favorites=state.favorites.filter(item=>item.id !== id)
        } else {
            // If item doesn't exist, add it
            state.favorites.push(action.payload);
          }


        // if(alreadyIdIsfound){
        //     state.favorites = state.favorites.filter(item=>item.id!==action.payload.id);
        // }else{
        //  state.favorites.push(action.payload);
        // }
    },
   
  
   


}})

export const {addFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
