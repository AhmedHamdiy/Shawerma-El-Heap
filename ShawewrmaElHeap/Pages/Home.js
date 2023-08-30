import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RestaurantTitle from "../Components/RestaurantTitle";

const Home = () => {
  return (
    <ImageBackground
      source={require("../Final-design/background-image.jpg")}
      style={styles.img}
    >
      <View style={styles.container}>
        <RestaurantTitle style={styles.titleContainer} />

        <View style={styles.ButtonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Let's Eat!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Home;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  container: {  
    width: "60%",
    height: 410,
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 150,
    backgroundColor: "transparent",
    marginTop: 80,
  },

  titleContainer: {},

  ButtonsContainer: {
    width: "100%",
    height: "140px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    gap: 35,
    padding: "20px 20px",
  },

  button: {
    width: "100%",
    height: 60,
    padding: "0px 44px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "rgba(217, 195, 162, 0.70)",
  },

  buttonText: {
    color: "#9B3131",
    textAlign: "center",
    fontFamily: "Open-Sans",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 50,
    textTransform: "capitalize",
  },
});
