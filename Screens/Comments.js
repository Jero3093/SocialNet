import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Comments() {
  return (
    <SafeAreaView style={styles.Container}>
      <Text>Comments</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
