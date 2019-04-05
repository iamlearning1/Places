import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SharePlaceScreen extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon size={30} name="ios-share-alt" color="purple" />,
    title: "Share Place"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>SharePlaceScreen</Text>
      </View>
    );
  }
}

export default SharePlaceScreen;
