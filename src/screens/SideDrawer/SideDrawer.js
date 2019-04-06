import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SideDrawer extends Component {
	static navigationOptions = {
		drawerIcon: <Icon size={30} name="ios-log-out" color="purple" />
	};
	render() {
		return (
			<View>
				<Text>Side Drawer</Text>
			</View>
		);
	}
}

export default SideDrawer;
