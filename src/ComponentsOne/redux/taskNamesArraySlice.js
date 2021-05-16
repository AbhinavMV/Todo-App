import { createSlice } from "@reduxjs/toolkit";

const taskNamesArraySlice = createSlice({
    name:'tasksArray',
    initialState: [],
    reducers:{
        setTasksArray: (state,action) => {
            // console.log(action.payload)
            // console.log(state.tasks)
            state.push(action.payload)
                
            
        },
        replaceArray: (state,action) => {
            state = action.payload
        },
    }
})

export const {setTasksArray,replaceArray} = taskNamesArraySlice.actions;

export default taskNamesArraySlice.reducer;