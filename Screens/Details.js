import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux"; //Redux Selector - Dispatch
import { AddSlice } from "../Src/Store/AddSlice"; //Add Slice Component
import { Ionicons, Fontisto } from "@expo/vector-icons"; //Expo Icons
import Header from "../Src/Components/Details/Header"; //Header Component

export default function Details({ navigation }) {
  const ItemData = useSelector((state) => state.AddSlice.DetailsItem); //Data from the Details Item State

  const BackgroundColor = useSelector((state) => state.BackgroundSlice.Color); //Background State

  const ColorText = useSelector((state) => state.BackgroundSlice.Text); //Text Color State

  const Dispatch = useDispatch(); //Dispath

  const CommentText = () => {
    if (ItemData.Comments) {
      return (
        <View
          style={{
            borderTopWidth: 0.5,
            borderTopColor: "#12121220",
            padding: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, color: ColorText }}>
            {ItemData.Comments}
          </Text>
        </View>
      );
    } else {
      return;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: BackgroundColor }}>
      <ScrollView>
        {/* Header */}
        <Header Data={ItemData} TextColor={ColorText} />
        {/* Image */}
        <Image source={{ uri: ItemData.Image }} style={styles.Image} />
        {/* Buttons */}
        <View style={styles.ButtonsContainer}>
          {/* Like Button */}
          <TouchableOpacity
            onPress={() =>
              Dispatch(
                AddSlice.actions.SetNewLike({ ItemId: ItemData, NewLike: 1 })
              )
            }
          >
            <Ionicons name="ios-heart-outline" size={32} color={ColorText} />
          </TouchableOpacity>
          {/* Comment Button */}
          <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
            <Fontisto name="commenting" size={24} color={ColorText} />
          </TouchableOpacity>
        </View>
        {/* Footer */}
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, color: ColorText }}>
            {ItemData.Like} Likes
          </Text>
          <CommentText />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 400,
  },
  ButtonsContainer: {
    padding: 10,
    flexDirection: "row",
    columnGap: 15,
    alignItems: "center",
  },
});
