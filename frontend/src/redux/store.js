import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./authSlice.js";

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})