import React from "react";
import { Keyboard, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
	borderRadiusGlobal,
	colorPrimary,
	fontSizeGlobal,
	marginVertical_S,
	minHeigthGlobal,
} from "../utils/constValues";

export default function ButtonPrimary({ text, width = "100%", handlePress }) {
	const onPress = () => {
		if (handlePress) {
			handlePress();
		}
		Keyboard.dismiss();
	};

	return (
		<TouchableOpacity style={{ ...styles.button, width }} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		height: minHeigthGlobal,
		borderRadius: borderRadiusGlobal,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colorPrimary,
		padding: 8,
		marginVertical: marginVertical_S,
	},
	text: {
		fontWeight: "bold",
		fontSize: fontSizeGlobal,
		color: "white",
		textAlign: "center",
		margin: "auto",
	},
});
