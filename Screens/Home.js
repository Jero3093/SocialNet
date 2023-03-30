import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar"; //Expo Status Bar
import Header from "../Src/Components/Home/Header"; //Header Component
import Card from "../Src/Components/Home/Card"; //Card Component
import { useSelector } from "react-redux"; //Redux Selector Functions
import { FlashList } from "@shopify/flash-list"; //Flash List Component

export default function Home() {
  const AddItems = useSelector((state) => state.AddSlice.Items); //Data form the Items Global State

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar style="dark" />
      <Header />
      <FlashList
        data={AddItems}
        estimatedItemSize={100}
        renderItem={({ item }) => <Card Data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
