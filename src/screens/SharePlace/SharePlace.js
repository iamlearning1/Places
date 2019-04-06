import React, { Component } from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

import { addPlace } from "../../store/actions";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import PickImage from "../../components/PickImage";
import PickLocation from "../../components/PickLocation";
import HeadingText from "../../components/UI/HeadingText";

class SharePlaceScreen extends Component {
	state = {
		placeName: ""
	};
	static navigationOptions = {
		tabBarIcon: <Icon size={30} name="ios-share-alt" color="purple" />,
		title: "Share Place"
	};
	placeAddedHandler = () => {
		if (this.state.placeName.trim().length > 0) {
			this.props.onAddPlace(this.state.placeName);
			this.props.navigation.navigate("FindPlace");
		}
	};
	placeNameChangeHandler = placeName => {
		this.setState({
			placeName
		});
	};
	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					<HeadingText>Share a Place with us!</HeadingText>
					<PickImage />
					<PickLocation />
					<PlaceInput
						placeName={this.state.placeName}
						onChangeText={this.placeNameChangeHandler}
					/>
					<Button title="Share!" onPress={this.placeAddedHandler} />
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
