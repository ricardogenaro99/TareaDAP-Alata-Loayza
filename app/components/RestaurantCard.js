import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardModel from "../shared/components/CardModel";
import { fontSizeGlobal, marginVertical_S } from "../shared/utils/constValues";

const RestaurantCard = ({ restaurant, navigation }) => {
	const handlePress = () => {
		navigation.navigate("restaurant", {
			restaurant_id: restaurant?.restaurant_id,
		});
	};

	return (
		<View style={styles.container}>
			<CardModel onPress={handlePress} width="100%">
				<Text style={{ ...styles.text, fontWeight: "bold" }}>
					{restaurant?.restaurant_id || ""}
				</Text>
				<Text style={styles.text}>{restaurant?.name || ""}</Text>
			</CardModel>
		</View>
	);
};

export default RestaurantCard;

const styles = StyleSheet.create({
	container: {
		marginVertical: marginVertical_S,
	},
	text: {
		fontSize: fontSizeGlobal,
	},
});
