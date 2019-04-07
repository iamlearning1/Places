import React, { Component } from "react";
import {
	Platform,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Animated
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";
class FindPlaceScreen extends Component {
	state = {
		show: false,
		removeAnim: new Animated.Value(1)
	};
	static navigationOptions = {
		tabBarIcon: (
			<Icon
				size={30}
				name={Platform.OS === "android" ? "md-map" : "ios-map"}
				color="purple"
			/>
		),
		title: "Find Places"
	};

	itemSelectedHandler = key => {
		const selectedPlace = this.props.places.find(place => place.key == key);
		this.props.navigation.push("PlaceDetail", {
			selectedPlace
		});
	};

	showPlacesHandler = () => {
		Animated.timing(this.state.removeAnim, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true
		}).start();
	};

	render() {
		let display;
		if (this.state.show) {
			display = (
				<View style={styles.placelist}>
					<PlaceList
						places={this.props.places}
						onItemSelected={this.itemSelectedHandler}
					/>
				</View>
			);
		} else {
			display = (
				<View style={styles.button}>
					<Animated.View
						style={{
							opacity: this.state.removeAnim,
							transform: [
								{
									scale: this.state.removeAnim.interpolate({
										inputRange: [0, 1],
										outputRange: [14, 1]
									})
								}
							]
						}}
					>
						<TouchableOpacity
							onPress={this.showPlacesHandler}
							style={styles.icon}
						>
							<Text style={styles.text}>Search</Text>
						</TouchableOpacity>
					</Animated.View>
				</View>
			);
		}

		return display;
	}
}

const styles = StyleSheet.create({
	icon: {
		borderWidth: 2,
		borderRadius: 15,
		alignItems: "center",
		borderColor: "purple"
	},
	button: { flex: 1, justifyContent: "center", alignItems: "center" },
	text: {
		fontSize: 26,
		fontWeight: "bold",
		color: "purple"
	},
	placelist: {
		flex: 1,
		alignItems: "center",
		margin: 10
	}
});

const mapStateToProps = state => ({
	places: state.places.places
});

export default connect(mapStateToProps)(FindPlaceScreen);
