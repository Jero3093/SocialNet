import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux"; //Redux Dispatch Functions
import { AddSlice } from "../Src/Store/AddSlice"; //Add Slice Component
import { FontAwesome } from "@expo/vector-icons"; //Expo Icon Component
import * as ImagePicker from "expo-image-picker"; //Expo Image Picker Component

export default function Add({ navigation }) {
  const [Id, setId] = useState(""); //Id State
  const [User, setUser] = useState(""); //User State
  const [Localization, setLocalization] = useState(""); //Localization State
  const [Image, setImage] = useState(null); //Image State
  const Like = 0; //Like Number
  const Comments = null; //Comments

  const Data = { Id, User, Localization, Image, Like, Comments }; //Collection Data State

  const Dispatch = useDispatch(); //Dispatch

  const BackgroundColor = useSelector((state) => state.BackgroundSlice.Color); //Background State

  const ColorText = useSelector((state) => state.BackgroundSlice.Text); //Text Color State

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }; //Image Picker Function

  const SendData = () => {
    if (((Id, User, Localization === ""), Image === null)) {
      Alert.alert("Sorry", "Please fill the form to continue");
    } else {
      Dispatch(AddSlice.actions.GetItems({ Items: Data }));
      setId("");
      setLocalization("");
      setUser("");
      setImage(null);
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
      {/* Id */}
      <TextInput
        style={styles.Input}
        value={Id}
        onChangeText={(text) => setId(text)}
        placeholder={"Id"}
        keyboardType={"number-pad"}
        placeholderTextColor={ColorText}
      />
      {/* User */}
      <TextInput
        style={styles.Input}
        value={User}
        onChangeText={(text) => setUser(text)}
        placeholder={"User"}
        placeholderTextColor={ColorText}
      />
      {/* Localization */}
      <TextInput
        style={styles.Input}
        value={Localization}
        onChangeText={(text) => setLocalization(text)}
        placeholder={"Localization"}
        placeholderTextColor={ColorText}
      />
      {/* Picker Image Button*/}
      <TouchableOpacity style={styles.PickerButton} onPress={pickImage}>
        <FontAwesome name="picture-o" size={25} color={ColorText} />
      </TouchableOpacity>
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
    backgroundColor: "#12121212",
    padding: 10,
  },
  PickerButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#121212",
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
