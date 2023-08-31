import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
const Dish = ({ props }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={props.image_url} />
      <Text style={styles.heading}>{props.dish_name}</Text>
      <View style={styles.details}>
        <Text style={styles.property}>Description: {props.description}</Text>
        <Text style={styles.property}>Rating: {props.price + " $"} </Text>
        <Text style={styles.property}>Rating: {props.rating} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 20,
    paddingRight: 20,
    gap: 19,
    backgroundColor: "#CF9C70",
  },

  img: {
    width: "100%",
    height: "50%",
  },

  heading: {
    color: "#74431E",
    textAlign: "left",
    fontFamily: "Inika",
    fontSize: 32,
    letterSpacing: 0.16,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  text: {
    color: "#9B3131",
    textAlign: "left",
    marginHorizontal: 16,
    marginHorizontal: 16,
    textShadowColor: "#9B3131",
    textShadowOffset: { width: 5, height: 10 },
    fontFamily: "Irish-Grover",
    fontSize: 40,
    fontWeight: "400",
    lineHeight: 45,
  },
});

export default Dish;
