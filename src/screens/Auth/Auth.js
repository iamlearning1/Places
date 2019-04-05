import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerActions } from "react-navigation";

import DefaultInput from "../../components/UI/DefaultInput";
import HeadingText from "../../components/UI/HeadingText";
import Button from "../../components/UI/Button/";

class AuthScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Login",
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Icon size={30} name="ios-menu" color="white" />
      </TouchableOpacity>
    ),
    headerLeftContainerStyle: {
      marginLeft: 10
    }
  });
  render() {
    return (
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <HeadingText style={styles.text}>Please Log In</HeadingText>
          <Button onPress={() => alert("Hello")} color="pink">
            Switch to Login
          </Button>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Email Address" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Current Password" style={styles.input} />
          </View>
          <Button
            onPress={() => this.props.navigation.navigate("Places")}
            color="pink"
          >
            Submit
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  text: {
    color: "white"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  }
});

export default AuthScreen;
