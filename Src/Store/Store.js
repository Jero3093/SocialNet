import { configureStore } from "@reduxjs/toolkit";
import { AddSlice } from "./AddSlice"; //Add Slice Component
import { BackgroundSlice } from "./BackgroundSlice"; //Background Slice Component

export const Store = configureStore({
  reducer: {
    AddSlice: AddSlice.reducer,
    BackgroundSlice: BackgroundSlice.reducer,
  },
});
