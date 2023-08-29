
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image,Pressable  } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import FoodCard from '../components/FoodCard';
const Menu_data = require('../Menu.json');

const MenuPage = () => {
    return (
        <View>
			<FlatList
                data={Menu_data["menu_sections"]}
				numColumns={2}
				renderItem={({ item }) => (
                        <View style={styles.foodContainer}>
                            <Text style={{ color:"#74431E", fontSize:50}}>{item.section_name}</Text>
                        <FlatList
                                data={item["dishes"]}
				renderItem={({ item }) => (
					<Pressable style={styles.item}>
                        <Image style={styles.img } source = { item.image_url } />
						<Text>{item.dish_name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<Text>{item.price+" $"}</Text>
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
				numColumns={3}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				showsVerticalScrollIndicator={false}
            /> 
                            
                        </View>
                )}
                
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				showsVerticalScrollIndicator={false}
			/> 
		</View>    )    
}

const styles = StyleSheet.create({
    foodContainer: {
            backgroundColor: "#CF9C70",
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

export default MenuPage;
