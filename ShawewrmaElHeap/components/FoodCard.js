import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const FoodCard = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.7}
        onPress={() =>
          props.navigation.navigate("Dish", {
            image_url: props.image_url,
            dish_name: props.dish_name,
            description: props.description,
            price: props.price,
            rating: props.rating,
          })
        }
      >
        <Image style={styles.img} source={{ uri: props.image_url }} />
        <Text style={styles.heading}>{props.dish_name}</Text>
        <View style={styles.details}>
          <Text style={styles.property}>price: {props.price + " EGP"}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.property}>rating: {props.rating} </Text>
            <FontAwesome
              name="star"
              size={16}
              color="yellow"
              style={{ marginTop: 6 }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "100",
    fontFamily: "Inika",
  },
  property: {
    color: "#000",
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Inika",
  },
  details: {
    marginHorizontal: 8,
    alignItems: "left",
    flexDirection: "column",
    marginVertical: 4,
    rowGap: 8,
  },
  item: {
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    height: 270,
    width: 220,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    paddingBottom: 26,
    marginHorizontal: 10,
  },
  img: {
    width: "90%",
    height: "60%",
    marginHorizontal: "5%",
    marginVertical: 12,
    borderRadius: 16,
  },
});

export default FoodCard;
