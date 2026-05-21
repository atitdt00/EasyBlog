import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://picsum.photos/v2/list";
// Fetch Images API
export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async () => {
    const response = await axios.get(`${API}`
    );

    return response.data;
  }
);
let initialState= {
    images: [],
    currentIndex: 0
}


 export const imageSlice= createSlice({
        name: "imageSlider",
        initialState,
        reducers:{
            nextSlide: (state, actions)=>{
                state.currentIndex===state.images.length -1 ? 0 : state.currentIndex + 1;
            },
            prevSlide: (state, actions)=>{
                state.currentIndex === 0 ? state.images.length -1 : state.currentIndex - 1;

            }
        }
    })

 export const {nextSlide , prevSlide}=imageSlice.actions
 export default imageSlice.reducer;