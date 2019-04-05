import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// import {connect}

import SharePlace from "../SharePlace/SharePlace";
import FindPlace from "../FindPlace/FindPlace";

const PlaceNavigator = createBottomTabNavigator(
  {
    SharePlace,
    FindPlace
  },
  {
    initialRouteName: "SharePlace"
  }
);

const PlaceContainer = createAppContainer(PlaceNavigator);

export default PlaceContainer;
