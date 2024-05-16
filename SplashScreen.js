import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("./assets/images/logo.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F9753",
    alignItems: "center",
    justifyContent: "center",
  },
});
