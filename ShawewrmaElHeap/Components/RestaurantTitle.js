import { StyleSheet, View, Text, Image } from "react-native";
const RestaurantTitle = () => {
  return (
    <View style={styles.container}>
      {/*The chief-hat logo*/}
      <Image source={require("../images/chief.png")} style={styles.img} />
      <Text style={styles.text}>Shawerma El Heap</Text>
    </View>
  );
};

export default RestaurantTitle;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: 230,
    height: 175,
    padding: "0px 10px",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 50,
    backgroundColor: "rgba(217, 195, 162, 0.87)",

  },

  img: {
    width: 50,
    height: 50,
  },

  text: {
    color: "#9B3131",
    textAlign: "center",
    textShadowColor: "#9B3131",
    textShadowOffset: { width: 5, height: 10 },
    fontFamily: "Irish-Grover",
    fontSize: 40,
    fontWeight: "400",
    lineHeight: 45,
  },
});
