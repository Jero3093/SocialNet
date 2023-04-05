import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; //Expo Icons
import { useNavigation } from "@react-navigation/native"; //Navigation

const Header = ({ Data, TextColor }) => {
  const navigation = useNavigation(); //Navigation

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={30} color={TextColor} />
      </TouchableOpacity>
      <View style={styles.Content}>
        <Text numberOfLines={1} style={{ color: TextColor, fontSize: 18 }}>
          {Data.User}
        </Text>
        <Text numberOfLines={1} style={{ color: TextColor, fontSize: 14 }}>
          {Data.Localization}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#12121212",
  },
  Content: {
    flexDirection: "column",
    rowGap: 5,
    marginLeft: 20,
  },
});
