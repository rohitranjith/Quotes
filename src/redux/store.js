import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/ui-slice";
import authSlice from "./reducers/auth-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,           
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;