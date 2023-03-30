import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar"; //Expo Status Bar
import { useSelector } from "react-redux"; //Redux Selector Functions
import { FlashList } from "@shopify/flash-list"; //Flash List Component
import { ItemsCount } from "../Src/Store/AddSlice"; //Items Count Function
import { Ionicons } from "@expo/vector-icons"; //Expo Icons
import Header from "../Src/Components/Home/Header"; //Header Component
import Card from "../Src/Components/Home/Card"; //Card Component

export default function Home() {
  const AddItems = useSelector((state) => state.AddSlice.Items); //Data form the Items Global State

  const Count = useSelector(ItemsCount); //Items Count from the Items Global State

  const Background = () => {
    if (Count >= 1) {
      return (
        <FlashList
          data={AddItems}
          estimatedItemSize={100}
          renderItem={({ item }) => <Card Data={item} />}
        />
      );
    } else {
      return (
        <View style={{ alignSelf: "center", alignItems: "center" }}>
          <Ionicons name="md-add" size={30} color="grey" />
          <Text style={{ color: "grey", fontSize: 18 }}>
            Go and add a new picture
          </Text>
        </View>
      );
    }
  }; //Background Component

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar style="dark" />
      {/* Header */}
      <Header />
      {/* Background */}
      <Background />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
