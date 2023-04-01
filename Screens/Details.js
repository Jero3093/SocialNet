import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux"; //Redux Selector

export default function Details() {
  const ItemData = useSelector((state) => state.AddSlice.DetailsItem);

  console.log(ItemData);

  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
