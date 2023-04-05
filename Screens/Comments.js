import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FlashList } from "@shopify/flash-list"; //Flash List Component
import { AntDesign } from "@expo/vector-icons"; //Expo Icons
import { useSelector, useDispatch } from "react-redux"; //Redux Selector - Dispatch Component
import { AddSlice } from "../Src/Store/AddSlice"; //Add Slice Component

export default function Comments({ navigation }) {
  const [Comment, setComment] = useState(""); //Comment State

  const ItemData = useSelector((state) => state.AddSlice.DetailsItem); //Item Data

  const Dispatch = useDispatch(); //Dispatch

  return (
    <SafeAreaView style={styles.Container}>
      {/* Top Button */}
      <TouchableOpacity
        style={styles.TopButton}
        onPress={() => navigation.goBack()}
      ></TouchableOpacity>
      {/* Comments List */}
      <View>
        <Text>{ItemData.Comments} </Text>
      </View>
      {/* Text Input */}
      <View style={styles.Footer}>
        <TextInput
          style={styles.Input}
          placeholder="Write a comment..."
          placeholderTextColor={"black"}
          value={Comment}
          onChangeText={(text) => setComment(text)}
        />
        <TouchableOpacity
          onPress={() =>
            Dispatch(
              AddSlice.actions.SetComment({
                Comment: Comment,
                ItemID: ItemData.Id,
              })
            )
          }
        >
          <AntDesign name="arrowup" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  TopButton: {
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#12121235",
    width: 60,
    height: 8,
    borderRadius: 20,
    marginBottom: 15,
  },
  Input: {
    alignSelf: "center",
    width: "80%",
    height: 50,
    backgroundColor: "#12121230",
    padding: 10,
    borderRadius: 30,
  },
  Footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});