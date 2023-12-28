"use client";

import { manufacturers } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
manufacturers;

export interface SetQuery {
  query: string;
}
const initialQuery: SetQuery = {
  query: "",
};

export const querySlice = createSlice({
  name: "query",
  initialState: initialQuery,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});
export const { updateQuery } = querySlice.actions;
export default querySlice.reducer;
