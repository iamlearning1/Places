import React from "react";
import { Text, StyleSheet } from "react-native";

export default props => (
  <Text {...props} style={[styles.text, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: "bold"
  }
});
