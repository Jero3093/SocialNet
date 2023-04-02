import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons"; //Expo Icons
import { useDispatch } from "react-redux"; //Redux Dispatch
import { useNavigation } from "@react-navigation/native"; //Navigation
import { AddSlice } from "../../Store/AddSlice"; //Add Slice Component

const Card = ({ Data }) => {
  const Dispatch = useDispatch(); //Dispatch
  const navigation = useNavigation(); //Navigation

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
        <TouchableOpacity
          onPress={() => {
            Dispatch(AddSlice.actions.SetDetailsItem({ ItemID: Data.Id }));
            navigation.navigate("Details");
          }}
        >
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={26}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {/* Image */}
      <Image source={{ uri: Data.Image }} style={styles.Image} />
      {/* Card Footer */}
      <View style={styles.ButtonsContainer}>
        <TouchableOpacity
          onPress={() =>
            Dispatch(AddSlice.actions.SetNewLike({ ItemId: Data, NewLike: 1 }))
          }
        >
          <Ionicons name="ios-heart-outline" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
          <Fontisto name="commenting" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.Footer}>
        <Text>{Data.Like} Likes</Text>
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
  ButtonsContainer: {
    padding: 10,
    rowGap: 7,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
  },
  Footer: {
    padding: 10,
  },
});
