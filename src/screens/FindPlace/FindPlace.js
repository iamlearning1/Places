import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class FindPlaceScreen extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon size={30} name="md-map" color="purple" />,
    title: "Find Places"
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>FindPlaceScreen</Text>
      </View>
    );
  }
}

export default FindPlaceScreen;
