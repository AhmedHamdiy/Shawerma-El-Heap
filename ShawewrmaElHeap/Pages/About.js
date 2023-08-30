import React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import RestaurantTitle from "../Components/RestaurantTitle";

export const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <RestaurantTitle />
      </View>
      <Text style={styles.title}>Who We Are?</Text>
      <View style={styles.info}>
        <Text style={styles.body}>
          We are a shami restaurant presenting various types of shami food
          specialized in shawerma.
        </Text>

        <Text style={styles.body}>
          {`Location : El-Hosary square, 6th of October\nopen Time : 10 am\ncloseTime : 12 pm`}
        </Text>
      </View>

      <Text style={styles.title}>Contact us</Text>
      <View style={styles.contact}>
        <Text style={styles.contactBody}>phone: +20 111 684 2281{"\n"}</Text>

        <Text
          style={styles.anchor}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/abdelruhman.sami")
          }
        >
          Facebook Page
        </Text>
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

  titleContainer: {
    width: "60%",
  },

  title: {
    width: "90%",
    color: "#74431E",
    textAlign: "left",
    fontSize: 24,
    fontWeight: "400",
    fontFamily: "Inika",
    lineHeight: 30,
  },

  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 180,
    gap: 5,
    borderRadius: 20,
    backgroundColor: "rgba(217, 195, 162, 0.87)",
  },
  body: {
    width: "95%",
    height: 70,
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Inika",
    lineHeight: 16,
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 80,
    gap: 10,
    borderRadius: 20,
    backgroundColor: "rgba(217, 195, 162, 0.87)",
  },
  anchor: {
    color: "blue",
    width: "95%",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 16,
  },

  contactBody: {
    width: "95%",
    height: 20,
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 16,
    fontFamily: "Inika",
  },
});
