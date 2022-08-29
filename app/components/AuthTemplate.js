import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loader from "react-native-modal-loader";
import ButtonPrimary from "../shared/components/ButtonPrimary";
import InputPrimary from "../shared/components/InputPrimary";
import { colorPrimary } from "../shared/utils/constValues";
import { screenSheet } from "../shared/utils/sheets";

const initialForm = {
	email: "",
	password: "",
};
const AuthTemplate = ({
	navigateScreen,
	textButton,
	textNavigate,
	action,
	isLoading = false,
}) => {
	const [form, setForm] = useState(initialForm);

	const handlePress = async () => {
		if (isValid()) {
			console.log(form);
			await action(form);
			setForm(initialForm);
		}
	};

	const isValid = () => {
		return !(
			form.email.trim().length === 0 || form.password.trim().length === 0
		);
	};

	return (
		<View style={styles.container}>
			<Loader loading={isLoading} color={colorPrimary} opacity={0.7} />
			<InputPrimary
				value={form.email}
				handleChange={(value) => setForm({ ...form, email: value })}
				placeholder="Correo"
			/>
			<InputPrimary
				value={form.password}
				handleChange={(value) => setForm({ ...form, password: value })}
				secureTextEntry={true}
				placeholder="Contraseña"
			/>
			<ButtonPrimary text={textButton} handlePress={handlePress} />
			<Text style={styles.text} onPress={navigateScreen}>
				{textNavigate}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		...screenSheet,
		justifyContent: "center",
	},
	text: {
		color: colorPrimary,
		textAlign: "center",
		fontWeight: "bold",
		margin: 3,
	},
});

export default AuthTemplate;
