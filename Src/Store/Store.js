import { configureStore } from "@reduxjs/toolkit";
import { AddSlice } from "./AddSlice"; //Add Slice Component

export const Store = configureStore({
  reducer: {
    AddSlice: AddSlice.actions,
  },
});
