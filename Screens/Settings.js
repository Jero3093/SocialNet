import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux"; //Redux Selector - Dispatch Function
import { BackgroundSlice } from "../Src/Store/BackgroundSlice"; //Background Slice Component
import { Ionicons } from "@expo/vector-icons"; //Expo Icons

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
      <View style={styles.OptionContainer}>
        <Text style={styles.OptionTitle}>Toogle Dark Mode:</Text>
        {/* Dark Mode Button */}
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
          <Ionicons
            name={BackgroundColor === "#fff" ? "moon" : "sunny"}
            size={40}
            color={TextColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  OptionContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  OptionTitle: {
    color: "grey",
    fontSize: 20,
    letterSpacing: 1,
  },
});
