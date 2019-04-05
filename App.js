import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import PlaceContainer from "./src/screens/MainTabs/startMainTabs";
import configureStore from "./src/store/configureStore";
import PlaceDetail from "./src/screens/PlaceDetail/PlaceDetail";

const store = configureStore();

const AppNavigator = createStackNavigator(
  {
    Home: AuthScreen,
    PlaceDetail,
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

const Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
