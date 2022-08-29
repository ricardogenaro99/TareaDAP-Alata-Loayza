import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import Loader from "react-native-modal-loader";
import SelectDropdown from "react-native-select-dropdown";
import CuisinesList from "../components/CuisinesList";
import RestaurantsList from "../components/RestaurantsList";
import ALL_RESTAURANTS from "../data/restaurants.json";
import ButtonPrimary from "../shared/components/ButtonPrimary";
import InputPrimary from "../shared/components/InputPrimary";
import {
	borderRadiusGlobal,
	colorPrimary,
	colorWhite,
	fontSizeGlobal,
	marginVertical_L,
	marginVertical_M,
	marginVertical_S,
	minHeigthGlobal
} from "../shared/utils/constValues";
import { screenSheet } from "../shared/utils/sheets";

const initialSelect = {
	borough: "",
	cuisine: "",
};
const SearchScreen = ({ navigation }) => {
	const [boroughs, setBoroughs] = useState([]);
	const [cuisines, setCuisines] = useState([]);
	const [select, setSelect] = useState(initialSelect);
	const [searchId, setSearchId] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const cuisinesDropdownRef = useRef();

	useEffect(() => {
		const allBoroughs = ALL_RESTAURANTS.map((e) => e.borough);
		const depuratedBoroughs = allBoroughs.filter((item, index) => {
			return allBoroughs.indexOf(item) === index;
		});
		setBoroughs(depuratedBoroughs);
	}, []);

	useEffect(() => {
		if (select.borough) {
			setIsLoading(true);
			const resBoroughFilter = ALL_RESTAURANTS.filter(
				(e) => e.borough === select.borough,
			);
			const cuisinesDrop = new Set(resBoroughFilter.map((e) => e.cuisine));

			if (select.cuisine) {
				setIsLoading(false);
				return;
			}

			cuisinesDropdownRef.current.reset();
			setCuisines([...cuisinesDrop]);
			setIsLoading(false);
		}
	}, [select]);

	const handleSearch = () => {
		if (searchId.trim().length !== 0) {
			setIsLoading(true);

			const pos = ALL_RESTAURANTS.findIndex(
				(e) => e.restaurant_id === searchId,
			);

			if (pos === -1) {
				setIsLoading(false);
				showMessage({
					message: "No se encontro el restaurante",
					type: "warning",
				});
				return;
			}
			navigation.navigate("restaurant", { restaurant_id: searchId });
			setIsLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Loader loading={isLoading} color={colorPrimary} opacity={0.7} />
			<Text style={[styles.text, styles.textTitle]}>Buscar por Id:</Text>
			<View style={styles.containerSearch}>
				<InputPrimary
					value={searchId}
					handleChange={setSearchId}
					width="75%"
					placeholder="Buscar por Id"
				/>
				<ButtonPrimary text="Buscar" width="22%" handlePress={handleSearch} />
			</View>
			<Text
				style={[styles.text, styles.textTitle, { marginTop: marginVertical_L }]}
			>
				Filtrar por barrio y tipo de cocina:
			</Text>
			<SelectDropdown
				buttonStyle={styles.button}
				defaultButtonText="Selecciona un barrio"
				data={boroughs}
				onSelect={(value) => {
					setSelect({ ...initialSelect, borough: value });
				}}
			/>
			<SelectDropdown
				ref={cuisinesDropdownRef}
				buttonStyle={{ ...styles.button, marginBottom: marginVertical_L }}
				defaultButtonText="Selecciona un tipo de cocina"
				data={cuisines}
				onSelect={(value) => {
					setSelect({ ...select, cuisine: value });
				}}
			/>
			{!select.cuisine ? (
				<CuisinesList filters={select} navigation={navigation} />
			) : (
				<RestaurantsList filters={select} navigation={navigation} />
			)}
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	container: {
		...screenSheet,
	},
	containerSearch: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		height: minHeigthGlobal,
		borderRadius: borderRadiusGlobal,
		alignItems: "center",
		justifyContent: "center",
		borderColor: colorPrimary,
		borderWidth: 1,
		padding: 8,
		marginVertical: marginVertical_S,
		width: "100%",
		backgroundColor: colorWhite,
	},
	text: {
		fontSize: fontSizeGlobal,
		textAlign: "center",
		margin: "auto",
		marginVertical: marginVertical_M,
		color: colorPrimary,
		width: "100%",
	},
	textTitle: {
		fontWeight: "bold",
		textAlign: "left",
	},
});
