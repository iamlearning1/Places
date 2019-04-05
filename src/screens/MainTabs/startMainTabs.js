import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import SharePlace from "../SharePlace/SharePlace";
import FindPlace from "../FindPlace/FindPlace";

const PlaceNavigator = createBottomTabNavigator(
  {
    FindPlace,
    SharePlace
  },
  {
    initialRouteName: "FindPlace"
  }
);

const PlaceContainer = createAppContainer(PlaceNavigator);

export default PlaceContainer;
