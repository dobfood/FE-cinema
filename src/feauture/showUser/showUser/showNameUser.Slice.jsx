import { createSlice } from "@reduxjs/toolkit";



const showNameUserSlice = createSlice({
    name:"showNameUser",
    initialState :{
        name: ""
    },
    reducers :{
        showNameUser: (state,action) =>{
            state.showNameUser.push(action.payload);
        }
    }
})

export const {showNameUser} = showNameUserSlice.actions;
export default showNameUserSlice.reducer;