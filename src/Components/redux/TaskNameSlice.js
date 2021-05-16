import { createSlice } from "@reduxjs/toolkit";

const taskNameSlice = createSlice({
    name:'taskName',
    initialState: {name:''},
    reducers:{
        setName: (state,action) => ({...state,name:action.payload}),
    }
})

export const {setName} = taskNameSlice.actions;

export default taskNameSlice.reducer;