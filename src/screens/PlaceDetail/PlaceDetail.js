import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

import { deletePlaces } from "../../store/actions";
class PlaceDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("selectedPlace").name
  });

  placeDeletedHandler = () => {
    const selectedPlace = this.props.navigation.getParam("selectedPlace");
    this.props.onDeletePlace(selectedPlace.key);
    this.props.navigation.pop();
  };
  render() {
    const selectedPlace = this.props.navigation.getParam("selectedPlace");
    return (
      <View style={styles.container}>
        <View>
          <Image source={selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{selectedPlace.placeName}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    padding: 10
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => ({
  onDeletePlace: key => dispatch(deletePlaces(key))
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetail);
