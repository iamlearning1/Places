import React, { Component } from "react";
import { View, StyleSheet, Button, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

import { addPlace } from "../../store/actions";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import HeadingText from "../../components/UI/HeadingText";

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
      <ScrollView>
        <View style={styles.container}>
          <HeadingText>Share a Place with us!</HeadingText>
          <View style={styles.placeholder}>
            <Image
              source={require("../../assets/background.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.button}>
            <Button title="Pick Image" />
          </View>
          <View style={styles.placeholder}>
            <HeadingText style={{ fontSize: 18 }}>Map</HeadingText>
          </View>
          <View style={styles.button}>
            <Button title="Locate Me" />
          </View>
          <PlaceInput />
          <Button title="Share!" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: placeName => dispatch(addPlace(placeName))
});

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
