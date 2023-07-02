import { createSlice } from "@reduxjs/toolkit";

const initialState={
    searchData:null, //collection data from api
}
const searchSlice= createSlice({
    name:"searchFlight",
    initialState,
    reducers:{
        setUtilites(state,action){
            // alert("true");
            state.dataUtilites=action.payload;
        },
        setData(state,action){
            state.searchData=action.payload;
        },
        clearUtilites(state){
            state.dataUtilites=null;
        }
    }
});

export default searchSlice.reducer;
export const {setUtilites,setData,clearUtilites}=searchSlice.actions;
