import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from './CounterSlice'

//combineReducer() can help to combine multiple reducers

const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
    middleware: [...getDefaultMiddleware({thunk:false})]
})

export default store;