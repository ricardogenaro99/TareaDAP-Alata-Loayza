import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import {
	DetailsScreen,
	SearchScreen,
	LoginScreen,
	RegisterScreen
} from "./app/screens";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="login">
				<Stack.Screen
					name="login"
					component={LoginScreen}
					options={{ title: "Ingresar" }}
				/>
				<Stack.Screen
					name="register"
					component={RegisterScreen}
					options={{ title: "Registrarse" }}
				/>
				<Stack.Screen
					name="search"
					component={SearchScreen}
					options={{ title: "Buscar restaurante" }}
				/>
				<Stack.Screen
					name="restaurant"
					component={DetailsScreen}
					options={{ title: "Detalle del restaurante" }}
				/>
			</Stack.Navigator>
			<FlashMessage position="center" />
		</NavigationContainer>
	);
}
