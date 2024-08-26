import { configureStore } from "@reduxjs/toolkit";
import shopReducer from './ShopiLIstSlice'

const store=configureStore({
    reducer:{
        shop:shopReducer,
    }
})
export default store;