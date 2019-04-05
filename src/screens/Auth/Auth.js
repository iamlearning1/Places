import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

class AuthScreen extends Component {
  static navigationOptions = {
    title: "Login"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Places")}
          color="purple"
        />
      </View>
    );
  }
}

export default AuthScreen;
