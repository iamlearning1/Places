import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  view: {
    borderRadius: 5
  },
  button: {
    margin: 6,
    padding: 8,
    borderColor: "pink",
    borderWidth: 2,
    borderRadius: 5
  }
});
