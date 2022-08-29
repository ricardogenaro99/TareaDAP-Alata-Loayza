import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { firebaseAuth } from "../../config/firebase";
import AuthTemplate from "../components/AuthTemplate";

const LoginScreen = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false);

	const navigateScreen = () => {
		navigation.navigate("register");
	};

	const action = async ({ email, password }) => {
		try {
			setIsLoading(true);
			await signInWithEmailAndPassword(firebaseAuth, email, password);
			navigation.navigate("search");
		} catch (e) {
			showMessage({
				message: e.message,
				type: "danger",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthTemplate
			navigateScreen={navigateScreen}
			textButton="Iniciar sesión"
			textNavigate="Aún no tengo cuenta"
			action={action}
			isLoading={isLoading}
		/>
	);
};

export default LoginScreen;
