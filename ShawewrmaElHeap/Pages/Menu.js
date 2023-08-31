import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image,Pressable, ScrollView  } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import RestaurantTitle from '../Components/RestaurantTitle';
import FoodCard from '../Components/FoodCard';

const Menu_data = require('../Menu.json');

const Menu = () => {
    
    return (<ScrollView style={styles.ScreenContainer}>
            <RestaurantTitle/>

        {
            Menu_data.menu_sections.map((section, index) => (
                <View>
                    <Text style={styles.heading}>
                        {section.section_name}
                    </Text>
                    <ScrollView  horizontal={true} key={index} style={styles.foodSection}>    
                    <View style={{ flexDirection: "row"}}>
                    {
                        section.dishes.map((item, index) => (
                            <FoodCard
                                key={index}
                                dish_name={item.dish_name}
                                image_url={item.image_url}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                    </View>
                    </ScrollView>
                    </View>
                ))
        }
    </ScrollView>
            )    
    }

const styles = StyleSheet.create({
    ScreenContainer: {
        backgroundColor: "#CF9C70",
        height: "100%",
        width: "100%",
    },

    heading: {
        color: "#74431E",
        textAlign: "left",
        fontFamily: "Inika",
        fontSize: 32,
        letterSpacing: 0.16,
        marginHorizontal: 16,
    },

    foodSection: {
            
            backgroundColor: "#CF9C70",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 7,
            borderRadius: 16,
            marginVertical: 16,
            paddingHorizontal: 8,
            paddingVertical: 26,
            marginHorizontal: 16,
    },
    
    item: {
        height: 150,
        width: 160,
        backgroundColor: "#CF9C20",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: "center",
        paddingBottom: 26,
        marginHorizontal: 16,
},
    img: {
        width: 150,
        height: "60%",
        resizeMode: "center",
        marginBottom: 10,
    },
});

export default Menu;
