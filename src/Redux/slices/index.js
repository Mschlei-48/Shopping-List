import { combineSlices } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import shopListSlice from '../shop/ShopiLIstSlice'
import credSlice from '../users/CredentialsSlice'




export const rootReducer = combineReducers({
    shop: shopListSlice,
    credential: credSlice,
});