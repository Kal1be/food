import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"counter",
    initialState:{isloggin:false},
    reducers:{
       login:(state)=>{
            state.isloggin = true},
      logout:(state)=>{
            state.isloggin=false
        }
    }
})

export const {login,logout}=slice.actions

export default slice.reducer