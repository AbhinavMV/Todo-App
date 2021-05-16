import { createSlice } from "@reduxjs/toolkit";

const taskDescriptionSlice = createSlice({
    name:'taskDescription',
    initialState: {description:''},
    reducers:{
        setDescription: (state,action) => ({...state,description:action.payload}),
    }
})

export const {setDescription} = taskDescriptionSlice.actions;
export default taskDescriptionSlice.reducer;