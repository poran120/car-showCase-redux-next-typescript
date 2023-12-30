"use client";
import { configureStore } from "@reduxjs/toolkit";
import querySlice from "./features/query/querySlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { carsApi } from "./features/apiFetch/apiFetch";

export const store = configureStore({
  reducer: {
    query: querySlice,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
