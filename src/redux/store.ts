import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./slices/genralSlice";

// Create store once (not per render)
export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
});

// Types for TS projects
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
