import React, { Component } from "react";
import { StyleSheet, View, Platform, Text } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { createStackNavigator, createAppContainer } from "react-navigation";

import AuthScreen from "./src/screens/Auth/Auth";

const AppNavigator = createStackNavigator(
  {
    Home: AuthScreen
  },
  { intialRouteName: "Home" }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <AppContainer />;
  }
}
export default App;
