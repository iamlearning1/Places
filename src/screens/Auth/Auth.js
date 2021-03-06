import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerActions } from "react-navigation";
import { connect } from "react-redux";

import DefaultInput from "../../components/UI/DefaultInput";
import HeadingText from "../../components/UI/HeadingText";
import Button from "../../components/UI/Button/";
import validate from "../../utility/validation";
import { tryAuth } from "../../store/actions/index";

class AuthScreen extends Component {
  state = {
    authMode: "signup",
    controls: {
      email: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        touched: false,
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        touched: false,
        valid: false,
        validationRules: {
          equalTo: "password"
        }
      }
    }
  };

  componentDidMount() {
    console.log(this.props.token);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.authMode === this.state.authMode &&
      this.props.authenticated
    ) {
      this.props.navigation.navigate("Places");
    }
  }

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

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => ({
      controls: {
        ...prevState.controls,
        confirmPassword: {
          ...prevState.controls.confirmPassword,
          valid:
            key === "password"
              ? validate(
                  prevState.controls.confirmPassword.value,
                  prevState.controls.confirmPassword.validationRules,
                  connectedValue
                )
              : prevState.controls.confirmPassword.valid
        },
        [key]: {
          ...prevState.controls[key],
          value,
          touched: true,
          valid: validate(
            value,
            prevState.controls[key].validationRules,
            connectedValue
          )
        }
      }
    }));
  };

  authHandler = () => {
    const { email, password } = this.state.controls;
    const authData = {
      email: email.value,
      password: password.value
    };
    this.props.onTryAuth(authData, this.state.authMode);
  };

  authModeHandler = () => {
    this.setState(prevState => ({
      authMode: prevState.authMode === "signup" ? "login" : "signup"
    }));
  };

  render() {
    const confirmPass = (
      <DefaultInput
        placeholder="Confirm Password"
        style={styles.input}
        value={this.state.controls.confirmPassword.value}
        onChangeText={val => this.updateInputState("confirmPassword", val)}
        valid={this.state.controls.confirmPassword.valid}
        touched={this.state.controls.confirmPassword.touched}
        secureTextEntry={true}
        autoCapitalize="none"
      />
    );

    let submitButton = (
      <Button
        onPress={this.authHandler}
        color="pink"
        disabled={
          !this.state.controls.email.valid ||
          !this.state.controls.password.valid ||
          (!this.state.controls.confirmPassword.valid &&
            this.state.authMode === "signup")
        }
      >
        Submit
      </Button>
    );

    if (this.props.loading) {
      submitButton = <ActivityIndicator size="large" color="purple" />;
    }

    return (
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.backgroundImage}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <HeadingText style={styles.text}>Please Log In</HeadingText>
          <Button onPress={this.authModeHandler} color="pink">
            Switch to {this.state.authMode === "signup" ? "Sign-up" : "Log-in"}
          </Button>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inputContainer}>
              <DefaultInput
                placeholder="Email Address"
                style={styles.input}
                value={this.state.controls.email.value}
                onChangeText={val => this.updateInputState("email", val)}
                valid={this.state.controls.email.valid}
                touched={this.state.controls.email.touched}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                keyboardType="email-address"
              />
              <DefaultInput
                placeholder="Password"
                style={styles.input}
                value={this.state.controls.password.value}
                onChangeText={val => this.updateInputState("password", val)}
                valid={this.state.controls.password.valid}
                touched={this.state.controls.password.touched}
                secureTextEntry={true}
                autoCapitalize="none"
              />
              {this.state.authMode === "signup" ? confirmPass : null}
            </View>
          </TouchableWithoutFeedback>
          {submitButton}
        </KeyboardAvoidingView>
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

const mapStateToProps = state => ({
  loading: state.ui.isLoading,
  authenticated: state.auth.authenticated,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  onTryAuth: (authData, authMode) => dispatch(tryAuth(authData, authMode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScreen);
