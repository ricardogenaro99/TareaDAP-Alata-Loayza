import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ALL_RESTAURANTS from "../data/restaurants.json";
import { fontSizeGlobal, marginVertical_S } from "../shared/utils/constValues";

const CuisinesList = ({ filters }) => {
	const [dataList, setDataList] = useState([]);

	useEffect(() => {
		const tmp = {};
		ALL_RESTAURANTS.filter((e) => e.borough === filters.borough)
			.map((e) => e.cuisine)
			.forEach((i) => {
				tmp[i] = (tmp[i] || 0) + 1;
			});

		const arrTmp = Object.entries(tmp).map((e) => ({
			cuisine: e[0],
			count: e[1],
		}));
		setDataList(arrTmp);
	}, [filters]);

	return (
		<View style={styles.container}>
			<FlatList
				data={dataList}
				renderItem={({ item }) => (
					<Text key={item.restaurant_id} style={styles.item}>
						{item.count} restaurantes son del tipo de cocina {"-> "}
						{item.cuisine}
					</Text>
				)}
			/>
		</View>
	);
};

export default CuisinesList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
		width: "100%",
	},
	item: {
		fontSize: fontSizeGlobal,
		height: 44,
		marginVertical: marginVertical_S,
	},
});
