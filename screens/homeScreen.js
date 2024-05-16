import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Modal } from "react-native";
import { useState, useEffect } from "react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* First Half */}
      <View style={styles.FirstBox}>
        <View style={styles.BatteryImage}>
          <Image
            source={require("../assets/images/battery.png")}
            resizeMode="contain"
            style={{
              width: 105,
              height: 175,
            }}
          />
        </View>
        <Text style={styles.HeaderText1}> Current Health Status: </Text>
        <Text style={styles.ResultText1}> Healthy </Text>
        <Text style={styles.Text1}> as of </Text>
        <Text style={styles.Date1}> 05/16/2024 10:30:00 PM </Text>
        <View style={styles.rectangle1}>
          <Text style={styles.ButtonText1}>Info</Text>
        </View>
      </View>
      {/* Second Half */}
      <View style={styles.SecondBox}>
        <View style={styles.TempImage}>
          <Image
            source={require("../assets/images/temp.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.GroupText}>
          <Text style={styles.ResultText2}> Normal </Text>
          <Text style={styles.TempValue2}> 32 °C </Text>
          <Text style={styles.Text2}> as of </Text>
          <Text style={styles.Date2}> 05/16/2024 10:30:00 PM </Text>
          <View style={styles.rectangle2}>
            <Text style={styles.ButtonText2}>Info</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  FirstBox: {
    flex: 1,
    backgroundColor: "#1F9753",
    alignContent: "center",
    alignItems: "center",
  },
  BatteryImage: {
    paddingTop: 30,
  },
  HeaderText1: {
    fontFamily: "BVPL",
    fontSize: 14,
    color: "#ffffff",
    top: -30,
  },
  ResultText1: {
    fontFamily: "BVPB",
    fontSize: 40,
    color: "#ffffff",
    top: -35,
  },
  Text1: {
    fontFamily: "BVPL",
    fontSize: 20,
    color: "#fff",
    top: -40,
  },
  Date1: {
    fontFamily: "BVPL",
    fontSize: 14,
    color: "#fff",
    top: -40,
  },
  rectangle1: {
    top: -20,
    backgroundColor: "#FACC43",
    padding: 5,
    height: 45,
    width: 109,
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  ButtonText1: {
    alignSelf: "center",
    fontFamily: "BVPB",
    fontSize: 20,
    color: "#ffffff",
  },
  SecondBox: {
    flex: 1,
    backgroundColor: "#DDE1E1",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  TempImage: {
    paddingTop: 80,
    paddingLeft: 42,
  },
  GroupText: {
    flex: 1,
    paddingTop: 59,
    paddingLeft: 20,
  },
  ResultText2: {
    fontFamily: "BVPB",
    fontSize: 30,
    color: "#1F9753",
  },
  TempValue2: {
    fontFamily: "BVPB",
    fontSize: 25,
    color: "#1F9753",
    top: -8,
  },
  Text2: {
    fontFamily: "BVPL",
    fontSize: 15,
    color: "#1F9753",
    top: -8,
    paddingLeft: 3,
  },
  Date2: {
    fontFamily: "BVPL",
    fontSize: 15,
    color: "#1F9753",
    top: -8,
    paddingLeft: 3,
  },
  rectangle2: {
    top: 10,
    backgroundColor: "#FACC43",
    padding: 5,
    height: 45,
    width: 109,
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  ButtonText2: {
    alignSelf: "center",
    fontFamily: "BVPB",
    fontSize: 20,
    color: "#ffffff",
  },
});
