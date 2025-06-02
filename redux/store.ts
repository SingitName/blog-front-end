
import { authApi } from "@/util/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(authApi.middleware),
})
