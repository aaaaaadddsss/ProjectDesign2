import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text> Hi </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDE1E1",
    alignItems: "center",
    justifyContent: "center",
  },
});
