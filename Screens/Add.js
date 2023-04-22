import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux"; //Redux Dispatch Functions
import { AddSlice } from "../Src/Store/AddSlice"; //Add Slice Component
import { FontAwesome, Octicons } from "@expo/vector-icons"; //Expo Icon Component
import * as ImagePicker from "expo-image-picker"; //Expo Image Picker Component

export default function Add({ navigation }) {
  const [User, setUser] = useState(""); //User State
  const [Localization, setLocalization] = useState(""); //Localization State
  const [Image, setImage] = useState(null); //Image State
  const [Video, setVideo] = useState(null); //Image State
  const Like = 0; //Default Like Number
  const Comments = []; //Empty Array of Comments

  const Dispatch = useDispatch(); //Dispatch

  const BackgroundColor = useSelector((state) => state.BackgroundSlice.Color); //Background State

  const generateId = () => {
    const newId = Math.random().toString(36);
    return newId;
  }; //Function to generate a random Id for the Post

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }; //Image Picker Function

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      videoMaxDuration: 600,
      videoQuality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  }; //Video Picker Function

  const SendData = () => {
    if (
      User === "" ||
      Localization === "" ||
      (Video ? Video === null : Image === null)
    ) {
      Alert.alert(
        "Sorry",
        "Fill the form and import a image or video to continue"
      );
    } else {
      //Generated Id by Function
      const Id = generateId();
      //Send all the parameters to the State
      Dispatch(
        AddSlice.actions.GetItems({
          Items: {
            Id,
            User,
            Localization,
            Image,
            Video,
            Like,
            Comments,
          },
        })
      );
      setUser("");
      setLocalization("");
      setImage(null);
      setVideo(null);
      navigation.navigate("Home");
    }
  }; //Send Data Function

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: BackgroundColor,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 30,
      }}
    >
      {/* User */}
      <TextInput
        style={styles.Input}
        value={User}
        onChangeText={(text) => setUser(text)}
        placeholder={"User"}
        placeholderTextColor={"black"}
      />
      {/* Localization */}
      <TextInput
        style={styles.Input}
        value={Localization}
        onChangeText={(text) => setLocalization(text)}
        placeholder={"Localization"}
        placeholderTextColor={"black"}
      />
      {/* Picker Buttons */}
      <View style={{ flexDirection: "row", columnGap: 50 }}>
        <TouchableOpacity style={styles.PickerButton} onPress={pickImage}>
          <FontAwesome name="picture-o" size={30} color="#00d7ff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.PickerButton} onPress={pickVideo}>
          <Octicons name="video" size={30} color="#00d7ff" />
        </TouchableOpacity>
      </View>
      {/* Submit Button */}
      <TouchableOpacity style={styles.SubmitButton} onPress={SendData}>
        <Text style={styles.ButtonText}>Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Input: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#DFDFDF",
  },
  PickerButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#00d7ff",
    alignItems: "center",
    justifyContent: "center",
  },
  SubmitButton: {
    width: "80%",
    height: 50,
    borderWidth: 3,
    borderColor: "#00d7ff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    color: "#00d7ff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
