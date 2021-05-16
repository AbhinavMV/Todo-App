import { createSlice } from "@reduxjs/toolkit";

const taskNamesArraySlice = createSlice({
    name:'tasksArray',
    initialState:{tasks:[]},
    reducers:{
        setTasksArray: (state,action) => {
            state.tasks.push(action.payload)
        },
        replaceArray: (state,action) => ({...state,tasks:[...action.payload]}),
    }
})

export const {setTasksArray,replaceArray,editArray} = taskNamesArraySlice.actions;

export default taskNamesArraySlice.reducer;