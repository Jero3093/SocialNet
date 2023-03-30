import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>SocialNet</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    padding: 15,
  },
  Title: {
    color: "#00d7ff",
    fontWeight: "bold",
    fontSize: 32,
  },
});
