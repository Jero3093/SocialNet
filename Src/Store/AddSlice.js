import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Items: [], //Items Global State
}; //Container of the Global State

export const AddSlice = createSlice({
  name: "AddSlice",
  initialState,
  reducers: {},
}); //Container of the function to change the States
