import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerActions } from "react-navigation";

class AuthScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Login",
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Icon size={30} name="ios-menu" color="white" />
      </TouchableOpacity>
    ),
    headerLeftContainerStyle: {
      marginLeft: 10
    }
  });
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
