import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";
class FindPlaceScreen extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon size={30} name="md-map" color="purple" />,
    title: "Find Places"
  };

  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.find(place => place.key == key);
    this.props.navigation.push("PlaceDetail", {
      selectedPlace
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", margin: 10 }}>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places
});

export default connect(mapStateToProps)(FindPlaceScreen);
