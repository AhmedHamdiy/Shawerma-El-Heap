import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import RestaurantTitle from "../components/RestaurantTitle";
import FoodCard from "../components/FoodCard";
import NavBar from "../components/NavBar";

const Menu_data = require("../Menu.json");

const Menu = ({ navigation }) => {
  return (
    <>
      <ScrollView
        style={styles.ScreenContainer}
        contentContainerStyle={styles.content}
      >
        <View style={styles.titleComponent}>
          <RestaurantTitle />
        </View>

        {Menu_data.menu_sections.map((section, index) => (
          <View>
            <Text style={styles.heading}>{section.section_name}</Text>
            <ScrollView
              horizontal={true}
              key={index}
              style={styles.foodSection}
            >
              <View style={{ flexDirection: "row" }}>
                {section.dishes.map((item, index) => (
                  <FoodCard
                    key={index}
                    dish_name={item.dish_name}
                    image_url={item.image_url}
                    price={item.price}
                    rating={item.rating}
                    description={item.description}
                    navigation={navigation}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        ))}
      </ScrollView>
      <NavBar navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    backgroundColor: "#CF9C70",
    height: "100%",
    width: "100%",
  },
  content: {
    paddingBottom: 40,
  },
  titleComponent: {
    marginTop: 100,
    marginBottom: 20,
    alignItems: "center",
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
