import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
	borderRadiusGlobal,
	colorPrimary,
	colorWhite,
	fontSizeGlobal,
	marginVertical_S,
	minHeigthGlobal
} from "../utils/constValues";

export default function InputPrimary({
	value,
	handleChange,
	placeholder,
	secureTextEntry = false,
	autoCapitalize = "none",
	width = "100%",
}) {
	return (
		<View style={{ ...styles.container, width }}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder={placeholder}
					style={styles.textInput}
					value={value}
					onChangeText={handleChange}
					secureTextEntry={secureTextEntry}
					autoCapitalize={autoCapitalize}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colorWhite,
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
		borderRadius: borderRadiusGlobal,
		marginVertical: marginVertical_S,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: colorPrimary,
		borderRadius: borderRadiusGlobal,
		height: minHeigthGlobal,
	},
	textInput: {
		paddingLeft: 10,
		flex: 1,
		height: minHeigthGlobal,
		fontSize: fontSizeGlobal,
	},
});
