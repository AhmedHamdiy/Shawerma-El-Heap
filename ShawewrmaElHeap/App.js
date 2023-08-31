import { StyleSheet, Text, View, Image } from "react-native";

import Home from "./screens/Home";
import { About } from "./screens/About";
import Menu from "./screens/Menu";
import Dish from "./screens/Dish";

import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Irish-Grover": require("./fonts/IrishGrover-Regular.ttf"),
    Inika: require("./fonts/Inika-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Dish" component={Dish} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },

  text: {
    fontFamily: "Irish-Grover",
  },

  screen: {
    headerTitleStyle: {
      fontFamily: "Inika",
      fontSize: 22,
      color: "#9B3131",
    },
    headerStyle: {
      backgroundColor: "rgba(217, 195, 162, 0.87)",
    },
  },
});
