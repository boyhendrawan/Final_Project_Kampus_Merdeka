import { createSlice } from "@reduxjs/toolkit";

const  initialState={
    dataCity:null,
    isLoading:true
}

const sliceCities=createSlice({
    name:"sliceCities",
    initialState,
    reducers:{
        setCity(state,action){
            state.dataCity=action.payload
        },
        setStatusLoading(state,action){
            state.isLoading=action.payload
        }
    }
});

export default sliceCities.reducer;
export const {setCity,setStatusLoading}=sliceCities.actions;
