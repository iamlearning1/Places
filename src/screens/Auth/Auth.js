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
	state = {
		controls: {
			email: {
				value: "",
				valid: false,
				validationRules: {
					isEmail: true
				}
			},
			password: {
				value: "",
				valid: false,
				validationRules: {
					minLength: 6
				}
			},
			confirmPassword: {
				value: "",
				valid: false,
				validationRules: {
					equalTo: "password"
				}
			}
		}
	};

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
		this.setState(prevState => ({
			controls: {
				...prevState.controls,
				[key]: {
					...prevState.controls[key],
					value
				}
			}
		}));
	};

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
						<DefaultInput
							placeholder="Email Address"
							style={styles.input}
							value={this.state.controls.email.value}
							onChangeText={val =>
								this.updateInputState("email", val)
							}
						/>
						<DefaultInput
							placeholder="Password"
							style={styles.input}
							value={this.state.controls.password.value}
							onChangeText={val =>
								this.updateInputState("password", val)
							}
						/>
						<DefaultInput
							placeholder="Current Password"
							style={styles.input}
							value={this.state.controls.confirmPassword.value}
							onChangeText={val =>
								this.updateInputState("confirmPassword", val)
							}
						/>
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
