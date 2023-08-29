
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image,Pressable  } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const Menu_data = require('../Menu.json');

const FoodCard = () => {
    return (
        <View>
			<FlatList
				data={Menu_data["menu_sections"][0]["dishes"]}
				renderItem={({ item }) => (
					<Pressable style={styles.item}>
                        <Image style={styles.img } source = { item.image_url } />
						<Text>{item.dish_name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<Text>{item.price+"$"}</Text>
							<Text> | </Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={{ marginRight: 4 }}>{item.rating}</Text>
								<FontAwesome
									name="star"
									size={16}
									color="yellow"
								/>
							</View>
						</View>
					</Pressable>
				)}
				numColumns={4}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				showsVerticalScrollIndicator={false}
			/> 
		</View>    )    
}

const styles = StyleSheet.create({
    
    item: {
        
            backgroundColor: "#CF9C20",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 7,
            borderRadius: 16,
            marginVertical: 16,
            alignItems: "center",
            paddingHorizontal: 8,
            paddingVertical: 26,
            marginHorizontal: 16,
},
    img: {
        width: 200,
        height: 200,
        resizeMode: "center" 
},
    square: {
            width: 24,
            height: 24,
            backgroundColor: '#55BCF6',
            opacity: 0.4,
            borderRadius: 5,
            marginRight: 15,
},
    itemText: {
            maxWidth: '80%',
},
    circular: {
            width: 12,
            height: 12,
            borderColor: '#55BCF6',
            borderWidth: 2,
            borderRadius: 5,
},
});

export default FoodCard;
