import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from './CounterSlice'
import TaskDescriptionSlice from "./TaskDescriptionSlice";
import taskNamesArraySlice from "./taskNamesArraySlice";
import TaskNameSlice from "./TaskNameSlice";

//combineReducer() can help to combine multiple reducers

const store = configureStore({
    reducer: {
        counter: counterSlice,
        taskName: TaskNameSlice,
        taskDescription: TaskDescriptionSlice,
        taskNamesArray: taskNamesArraySlice,
    },
    middleware: [...getDefaultMiddleware({thunk:false})]
})

export default store;