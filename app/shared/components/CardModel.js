import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { borderRadiusGlobal, colorWhite } from "../utils/constValues";
export default function CardModel({ children, onPress, width = "90%" }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={{ ...styles.cardContainer, width }}>{children}</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: colorWhite,
		borderRadius: borderRadiusGlobal,
		paddingVertical: 30,
		paddingHorizontal: 25,
	},
});
