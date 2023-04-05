import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux"; //Redux Selector - Dispatch Function
import { BackgroundSlice } from "../Src/Store/BackgroundSlice"; //Background Slice Component

export default function Settings() {
  const Dispatch = useDispatch(); //Dispatch

  const BackgroundColor = useSelector((state) => state.BackgroundSlice.Color); //Background Color State
  const TextColor = useSelector((state) => state.BackgroundSlice.Text); //Text Color State

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: BackgroundColor,
      }}
    >
      {/* Button */}
      <TouchableOpacity
        onPress={() =>
          Dispatch(
            BackgroundSlice.actions.DarkMode({
              BgColor: "#121212",
              TextColor: "#fff",
            })
          )
        }
      >
        <Text style={{ color: TextColor }}>Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
