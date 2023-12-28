"use client";
import { configureStore } from "@reduxjs/toolkit";
import querySlice from "./features/query/querySlice";
import counterSlice from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    query: querySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
