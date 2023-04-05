import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CommentCard = ({ Comment }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>{Comment}</Text>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  Container: {
    borderTopWidth: 0.5,
    borderTopColor: "#12121220",
    padding: 10,
  },
  Text: {
    fontSize: 16,
  },
});
