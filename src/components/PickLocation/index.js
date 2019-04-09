import React, { Component } from "react";
import { View, Button, StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={this.state.focusedLocation}
          style={styles.map}
        /> */}
        <MapView style={styles.map} region={this.props.region} />
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
  map: {
    width: "100%",
    height: 250
  },
  button: {
    margin: 8
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
