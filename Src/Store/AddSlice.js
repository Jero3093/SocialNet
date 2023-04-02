import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Items: [], //Items Global State
  DetailsItem: null, //Details Item State
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
    SetDetailsItem: (state, action) => {
      const ItemId = action.payload.ItemID; //Specific Item ID from the Card
      const ItemData = state.Items.find((item) => item.Id === ItemId); //Find function to compare the Id of the Item from the Card with the Id of from the Items State

      state.DetailsItem = ItemData; //The Details Item State is equal to the Specific ItemData
    },
    SetNewLike: (state, action) => {
      const { ItemId, NewLike } = action.payload; //Item Data and New Like Number
      const Item = state.Items.find((item) => item.Id === ItemId.Id); //Filter of the Item with the Id

      Item.Like += NewLike; //The Likes of the Item will be summed together with the Like Number and be desplaied in the card
    },
  },
}); //Container of the function to change the States

export const ItemsCount = (state) => state.AddSlice.Items.length; //Funtion to get the number of items in the State
