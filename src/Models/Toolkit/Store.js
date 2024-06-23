import { configureStore } from "@reduxjs/toolkit";
import { user } from "./Active User/user";

export const AppStore = configureStore({
    reducer:{
        user:user.reducer,
    }
})