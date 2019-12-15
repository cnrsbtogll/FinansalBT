import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import Permissions from "react-native-permissions";

export default class CurrentPosition extends Component {
	state = {
		region: {
			latitude: 40.7731,
			longitude: 30.3478,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		},
	};

	componentDidMount() {
		Permissions.request('location').then(response => {

		})
	}

	// async componentDidMount() {
	// 	const permission = await Permissions.request('location');
	// 	if (permission !== 'authorized') {
	// 	  alert('lütfen konum izinlerini verin.');
	// 	  return false;
	// 	}

	// 	const {coords} = await this.getCurrentPosition();
	// 	this.setState({
	// 		region: {
	// 			...this.state.region,
	// 			latitude: coords.latitude,
	// 			longitude: coords.longitude
	// 		},
	// 	});
	// }

	// getCurrentPosition() {
	// 	return new Promise((resolve, reject) => {
	// 		navigator.geolocation.getCurrentPosition(position => {
	// 			resolve(position)
	// 		}),
	// 			reject,
	// 			{
	// 				enableHighAccuracy: true,
	// 				timeout: 5000,
	// 				maximumAge: 1000
	// 			}
	// 	},)
	// }

  render() {
    return (
		<View style={styles.container}>
			<MapView
				loadingEnabled={true}
				showsUserLocation={true}
				style={styles.map}
				region={this.state.region}
			>
			</MapView>
		</View>
	);
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  map: {
    flex: 1
  }
});
