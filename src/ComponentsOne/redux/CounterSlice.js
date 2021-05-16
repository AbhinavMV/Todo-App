import { createSlice } from "@reduxjs/toolkit";

const openSlice = createSlice({
    name:'open',
    initialState: {open:false},
    reducers:{
        toggle: (state) => ({...state,open:!state.open}),
    }
})

export const {toggle} = openSlice.actions;

export default openSlice.reducer;