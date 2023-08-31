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
    <View>
      <Pressable style={styles.item}>
        <Image style={styles.img} source={props.image_url} />
        <Text style={styles.heading}>{props.dish_name}</Text>
        <View style={styles.details}>
          <Text style={styles.property}>price: {props.price + "$"}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.property}>rating: {props.rating} </Text>
            <FontAwesome name="star" size={16} color="yellow" />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  property: {
    color: "#000",
    textAlign: "left",
    fontSize: 14,
  },
  details: {
    marginHorizontal: 16,
    alignItems: "left",
    flexDirection: "column",
    marginVertical: 8,
    rowGap: 8,
  },
  item: {
    height: 300,
    width: 150,
    backgroundColor: "#CF9C20",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 16,
    paddingBottom: 26,
    marginHorizontal: 16,
  },
  img: {
    width: "100%",
    height: "60%",
    resizeMode: "center",
    marginBottom: 10,
  },
});

export default FoodCard;
