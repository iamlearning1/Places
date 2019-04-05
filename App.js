import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import { createStackNavigator, createAppContainer } from "react-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import PlaceContainer from "./src/screens/MainTabs/startMainTabs";

const AppNavigator = createStackNavigator(
  {
    Home: AuthScreen,
    Places: PlaceContainer
  },
  {
    intialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "purple"
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
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
