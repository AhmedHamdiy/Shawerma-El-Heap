import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.col} onPress={() => navigation.navigate("Home")}>
        <Image style={styles.img} source={require("../images/home.png")} />
        <Text style={styles.text}>Home</Text>
      </Pressable>

      <Pressable style={styles.col} onPress={() => navigation.navigate("Menu")}>
        <Image style={styles.img} source={require("../images/menu.png")} />
        <Text style={styles.text}>Menu</Text>
      </Pressable>

      <Pressable
        style={styles.col}
        onPress={() => navigation.navigate("About")}
      >
        <Image style={styles.img} source={require("../images/about.png")} />
        <Text style={styles.text}>About</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(217, 195, 162, 0.87)",
    borderRadius: 50,
    paddingHorizontal: 20,
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    position: "absolute",
    bottom: 0,
  },
  text: {
    fontFamily: "Inika",
    fontSize: 16,
    fontWeight: "400",
    color: "#9B3131",
  },

  col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  img: {},
});

export default NavBar;
