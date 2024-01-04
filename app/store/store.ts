"use client";
import { configureStore } from "@reduxjs/toolkit";
import querySlice from "./features/query/querySlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { carsApi } from "./features/apiFetch/apiFetch";
import modalSlice from "./features/modalSlice.ts/modalSlice";
import phoneApiReducer from "./features/apiFetch/phoneApiFetch";
export const store = configureStore({
  reducer: {
    query: querySlice,
    modal: modalSlice,
    phone: phoneApiReducer, //phoneApi
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
