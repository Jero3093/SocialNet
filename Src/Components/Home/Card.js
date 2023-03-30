import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Card = ({ Data }) => {
  return (
    <View style={styles.Container}>
      {/* Card Header */}
      <View style={styles.Header}>
        <View>
          {/* User */}
          <Text style={styles.User}>{Data.User}</Text>
          {/* Localization */}
          <Text style={styles.Local}>{Data.Localization}</Text>
        </View>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={24}
          color="black"
        />
      </View>
      {/* Image */}
      <Image source={{ uri: Data.Image }} style={styles.Image} />
      {/* Card Footer */}
      <View style={styles.Footer}>
        <Ionicons name="heart" size={30} color="black" />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: "#12121212",
    borderBottomColor: "#12121212",
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  User: {
    fontSize: 17,
    marginBottom: 5,
  },
  Local: {
    fontSize: 12,
  },
  Image: {
    width: "100%",
    height: 350,
  },
  Footer: {
    padding: 10,
  },
});
