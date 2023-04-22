import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons"; //Expo Icons
import { useDispatch } from "react-redux"; //Redux Dispatch
import { useNavigation } from "@react-navigation/native"; //Navigation
import { AddSlice } from "../../Store/AddSlice"; //Add Slice Component
import { Video, ResizeMode } from "expo-av"; //Expo Video

const Card = ({ Data, TextColor }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const Dispatch = useDispatch(); //Dispatch
  const navigation = useNavigation(); //Navigation

  return (
    <View style={styles.Container}>
      {/* Card Header */}
      <View style={styles.Header}>
        <View>
          {/* User */}
          <Text style={{ fontSize: 17, marginBottom: 5, color: TextColor }}>
            {Data.User}
          </Text>
          {/* Localization */}
          <Text style={{ fontSize: 12, color: TextColor }}>
            {Data.Localization}
          </Text>
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
            color={TextColor}
          />
        </TouchableOpacity>
      </View>
      {/* Image - Video */}
      {Data.Video ? (
        //Video
        <Video
          ref={video}
          style={styles.Image}
          source={{ uri: Data.Video }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          shouldPlay={false}
        />
      ) : (
        //Image
        <Image source={{ uri: Data.Image }} style={styles.Image} />
      )}
      {/* Buttons */}
      <View style={styles.ButtonsContainer}>
        {/* Like Button */}
        <TouchableOpacity
          onPress={() =>
            Dispatch(AddSlice.actions.SetNewLike({ ItemId: Data, NewLike: 1 }))
          }
        >
          <Ionicons name="ios-heart-outline" size={32} color={TextColor} />
        </TouchableOpacity>
        {/* Comments Button */}
        <TouchableOpacity
          onPress={() => {
            Dispatch(AddSlice.actions.SetDetailsItem({ ItemID: Data.Id }));
            navigation.navigate("Comments");
          }}
        >
          <Fontisto name="commenting" size={24} color={TextColor} />
        </TouchableOpacity>
      </View>
      {/* Card Footer */}
      <View style={styles.Footer}>
        <Text style={{ color: TextColor }}>{Data.Like} Likes</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Container: {
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
  Image: {
    width: "100%",
    aspectRatio: 1,
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
