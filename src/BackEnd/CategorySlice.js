import { createSlice } from "@reduxjs/toolkit";

 let initialState={ 
    category: []
 }

export const categorySlice= createSlice({
    name: "category",
    initialState,
    reducers:{
        addCategory:(state, action) =>{ state.category.push(action.payload)}
    }
})

export const {addCategory}= categorySlice.actions;
export default categorySlice.reducer