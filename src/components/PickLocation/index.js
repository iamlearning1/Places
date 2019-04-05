import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

import HeadingText from "../UI/HeadingText";

export default class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <HeadingText style={{ fontSize: 18 }}>Map</HeadingText>
        </View>
        <View style={styles.button}>
          <Button title="Locate Me" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
