import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default props => {
  let content;
  if (!props.disabled) {
    content = (
      <View style={[styles.button, { backgroundColor: props.color }]}>
        <TouchableOpacity onPress={props.onPress}>
          <Text>{props.children}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    content = (
      <View style={styles.disabled}>
        <Text style={{ color: "#aaa" }}>{props.children}</Text>
      </View>
    );
  }
  return content;
};

const styles = StyleSheet.create({
  button: {
    margin: 6,
    padding: 8,
    borderColor: "pink",
    borderWidth: 2,
    borderRadius: 10
  },
  disabled: {
    margin: 6,
    padding: 8,
    borderColor: "#eee",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#eee"
  }
});
