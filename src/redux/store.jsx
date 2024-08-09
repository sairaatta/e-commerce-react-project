import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productReducer from "./productSlice";
import userReducer from './userSlice';


const store = configureStore({
    reducer: {
        cart :cartSlice,
        product : productReducer,
        users: userReducer,
    }
});
export default store;