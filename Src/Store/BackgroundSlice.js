import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Color: "#fff", //Background Color Global State
  Text: "black", //Color Text Global State
};

export const BackgroundSlice = createSlice({
  name: "BackgroundSlice",
  initialState,
  reducers: {
    DarkMode: (state, action) => {
      const { BgColor, TextColor } = action.payload;

      if (state.Color === "#121212" && state.Text === "#fff") {
        state.Color = "#fff";
        state.Text = "black";
      } else {
        state.Color = BgColor;
        state.Text = TextColor;
      }
    }, //Funtion to change the Background and the Text color all over the App
  },
});
