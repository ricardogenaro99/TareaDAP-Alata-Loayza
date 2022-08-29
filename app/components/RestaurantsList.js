import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import ALL_RESTAURANTS from "../data/restaurants.json";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = ({ filters, navigation }) => {
	const [dataList, setDataList] = useState([]);

	useEffect(() => {
		const tmp = ALL_RESTAURANTS.filter(
			(e) => e.cuisine === filters.cuisine && e.borough === filters.borough,
		);
		setDataList(tmp);
	}, [filters]);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={dataList}
				style={{ opacity: 0.8 }}
				renderItem={({ item }) => (
					<RestaurantCard
						key={item.restaurant_id}
						restaurant={item}
						navigation={navigation}
					/>
				)}
			/>
		</SafeAreaView>
	);
};

export default RestaurantsList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
});
