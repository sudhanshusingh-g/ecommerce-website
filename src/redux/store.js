import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice/cartSlice"
import { loadState, saveState } from "../utils/localStorageUtils";
const preloadedState = loadState();

const store=configureStore({
    reducer:{
        cart:cartReducer
    },
    preloadedState:{
        cart:preloadedState || {items:{}},
    },
})

store.subscribe(()=>{
    saveState(store.getState().cart)
})

export default store;