import { createSlice } from "@reduxjs/toolkit";

const openSlice = createSlice({
    name:'open',
    initialState: {open:false,edit:false},
    reducers:{
        toggle: (state) => ({...state,open:!state.open}),
        updateItem: (state,action) => ({...state,edit:!state.edit}),
    }
})

export const {toggle,updateItem} = openSlice.actions;

export default openSlice.reducer;