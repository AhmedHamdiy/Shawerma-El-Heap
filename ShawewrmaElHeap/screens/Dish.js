import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import NavBar from "../components/NavBar";

const Dish = ({ route, navigation }) => {
  const { image_url, dish_name, description, price, rating } = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: image_url }} />
      <Text style={styles.heading}>{dish_name}</Text>
      <View style={styles.details}>
        <Text style={styles.property}>Description: {description}</Text>
        <Text style={styles.property}>Price: {price + " EGP"} </Text>
        <Text style={styles.property}>Rating: {rating} </Text>
      </View>
      <NavBar navigation={navigation} />
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
    borderRadius: 30,
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
  property: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Inika",
    lineHeight: 16,
  },

  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    width: "100%",
    gap: 10,
  },
});

export default Dish;
