import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

import PlaceInput from "../../components/PlaceInput/PlaceInput";
import { addPlace } from "../../store/actions";

class SharePlaceScreen extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon size={30} name="ios-share-alt" color="purple" />,
    title: "Share Place"
  };
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
    this.props.navigation.navigate("FindPlace");
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddPlace: placeName => dispatch(addPlace(placeName))
});

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
