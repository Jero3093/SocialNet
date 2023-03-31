import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Items: [], //Items Global State
}; //Container of the Global State

export const AddSlice = createSlice({
  name: "AddSlice",
  initialState,
  reducers: {
    GetItems: (state, action) => {
      const items = action.payload.Items; //Data from the Add Screen by Dispatch
      const AddItems = state.Items.find((item) => item.Id === items.Id);

      if (AddItems) {
        state.Items = state.Items.filter((item) => item.Id !== items.Id);
      } else {
        state.Items.push(items); //Push all the Data to the Items State
      }
    },
  },
}); //Container of the function to change the States

export const ItemsCount = (state) => state.AddSlice.Items.length; //Funtion to get the number of items in the State
