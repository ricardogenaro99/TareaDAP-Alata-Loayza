import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ALL_RESTAURANTS from "../data/restaurants.json";
import CardModel from "../shared/components/CardModel";
import { fontSizeGlobal } from "../shared/utils/constValues";
import { screenSheet } from "../shared/utils/sheets";

const DetailItem = ({ label, value }) => {
	return (
		<View style={styles.viewRow}>
			<Text style={[styles.text, styles.textBold]}>{label} </Text>
			<Text style={styles.text}>{value}</Text>
		</View>
	);
};

const DetailsScreen = ({ route }) => {
	const [restaurant, setRestaurant] = useState();

	useEffect(() => {
		const restaurant_id = route.params?.restaurant_id;
		if (restaurant_id) {
			const res = ALL_RESTAURANTS.find(
				(e) => e.restaurant_id === restaurant_id,
			);
			setRestaurant(res);
		}
	}, []);

	return restaurant ? (
		<View style={styles.container}>
			<CardModel>
				<DetailItem label="Restaurant_id:" value={restaurant?.restaurant_id} />
				<DetailItem label="Name:" value={restaurant.name} />
				<DetailItem label="Street:" value={restaurant?.address?.street} />
				<DetailItem label="Building:" value={restaurant?.address?.building} />
				<DetailItem label="Zipcode:" value={restaurant?.address?.zipcode} />
				<DetailItem label="Borough:" value={restaurant?.borough} />
				<DetailItem label="Cuisine:" value={restaurant?.cuisine} />

				<View style={{ ...styles.viewRow, flexDirection: "column" }}>
					<Text style={[styles.text, styles.textBold]}>Grades:</Text>
					{restaurant.grades.map((e, i) => (
						<Text key={i} style={styles.text}>
							{`Date: ${new Date(e?.date?.$date).toLocaleDateString(
								"en-US",
							)} - Grade: ${e?.grade} - Score: ${e?.score}`}
						</Text>
					))}
				</View>
			</CardModel>
		</View>
	) : (
		<Text style={styles.text}>Vuelva a intentarlo más tarde</Text>
	);
};

export default DetailsScreen;

const styles = StyleSheet.create({
	container: {
		...screenSheet,
		justifyContent: "center",
	},
	text: {
		margin: 1,
		fontSize: fontSizeGlobal,
	},
	textBold: {
		fontWeight: "bold",
	},
	viewRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginVertical: 5,
	},
});
