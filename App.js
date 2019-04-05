import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import PlaceContainer from "./src/screens/MainTabs/startMainTabs";
import configureStore from "./src/store/configureStore";
import PlaceDetail from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

// const AppNavigator = createStackNavigator(
//   {
//     Home: AuthScreen,
//     PlaceDetail,
//     Places: PlaceContainer
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: "purple"
//       },
//       headerTintColor: "#FFFFFF",
//       headerTitleStyle: {
//         fontWeight: "bold"
//       }
//     }
//   }
// );

// const SideDrawerNavigator = createDrawerNavigator(
//   {
//     // SideDrawer,
//     Home: AppNavigator
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

// const Navigation = createAppContainer(SideDrawerNavigator);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        {/* <Navigation /> */}
        <PlaceContainer />
      </Provider>
    );
  }
}
