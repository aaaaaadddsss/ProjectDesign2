import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { ref, onValue } from "firebase/database";
import { db } from "../config";

export default function HomeScreen() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [CrankingVoltage, setCrankingVoltage] = useState(null);
  const [CrankingVoltageDate, setCrankingVoltageDate] = useState(null);
  const [OperatingVoltage, setOperatingVoltage] = useState(null);

  useEffect(() => {
    const voltageRef = ref(db, "Data/CrankingVoltage");

    const unsubscribe = onValue(voltageRef, (snapshot) => {
      const data = snapshot.val();
      setCrankingVoltage(data);
    });

    return () => unsubscribe();
  }, []);

  const getCrankingVoltageStatus = (voltage) => {
    if (voltage < 10.5 || voltage > 14.4) {
      return "Needs Maintenance";
    }
    return "Healthy";
  };

  useEffect(() => {
    const voltageRef = ref(db, "Data/OperatingVoltage");

    const unsubscribe = onValue(voltageRef, (snapshot) => {
      const data = snapshot.val();
      setOperatingVoltage(data);
    });

    return () => unsubscribe();
  }, []);

  const getOperatingVoltageStatus = (voltage) => {
    if (voltage < 10.5 || voltage > 14.4) {
      return "Needs Maintenance";
    }
    return "Healthy";
  };

  useEffect(() => {
    const voltageRef = ref(db, "Data/CrankingVoltageDate");

    const unsubscribe = onValue(voltageRef, (snapshot) => {
      const data = snapshot.val();
      setCrankingVoltageDate(data);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        BVPB: require("../assets/fonts/BeVietnamPro-Bold.ttf"),
        BVPL: require("../assets/fonts/BeVietnamPro-ExtraLight.ttf"),
        BVPBB: require("../assets/fonts/BeVietnamPro-ExtraBold.ttf"),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* First Half */}
      <View style={styles.FirstBox}>
        <View style={styles.Header}>
          <View style={styles.TextContainer}>
            <Text style={styles.Text1}> Battery Health </Text>
            <Text style={styles.Text2}> Status </Text>
          </View>
        </View>
      </View>
      {/* End of First Half */}
      {/* Second Half */}
      <View style={styles.SecondBox}>
        <View style={styles.Boxes}>
          {/* First Rectangle */}
          <View style={styles.Rectangle1}>
            <View style={styles.FirstLine}>
              <Text style={styles.Text3}> Cranking Voltage </Text>
              <Text style={styles.Text4}>
                {" "}
                {CrankingVoltageDate !== null
                  ? `${CrankingVoltageDate}`
                  : "Loading..."}
              </Text>
            </View>
            <View style={styles.Divider}></View>
            <View style={styles.SecondLine}>
              <Text style={styles.Text5}>
                {CrankingVoltage !== null
                  ? getCrankingVoltageStatus(CrankingVoltage)
                  : "Loading..."}
              </Text>
            </View>
          </View>
          {/* End of First Rectangle */}
          {/* Second Rectangle */}
          <View style={styles.Rectangle1}>
            <View style={styles.FirstLine}>
              <Text style={styles.Text3}> Operating Voltage </Text>
            </View>
            <View style={styles.Divider}></View>
            <View style={styles.SecondLine1}>
              <Text style={styles.Text5}>
                {OperatingVoltage !== null
                  ? getOperatingVoltageStatus(OperatingVoltage)
                  : "Loading..."}
              </Text>
            </View>
          </View>
          {/* End of Second Rectangle */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  FirstBox: {
    flex: 1,
    backgroundColor: "#1F9753",
  },
  Header: {
    flex: 1,
    justifyContent: "center",
  },
  TextContainer: {
    alignSelf: "center",
  },
  Text1: {
    fontFamily: "BVPB",
    fontSize: 60,
    color: "white",
  },
  Text2: {
    fontFamily: "BVPB",
    fontSize: 60,
    color: "white",
    alignSelf: "center",
  },
  SecondBox: {
    height: "70%",
    backgroundColor: "#DDE1E1",
    alignItems: "center",
  },
  Boxes: {
    flex: 0.95,
    alignItems: "center",
    justifyContent: "center",
  },
  Rectangle1: {
    width: 500,
    height: 220,
    backgroundColor: "#FACC43",
    borderRadius: 20,
    marginTop: 50,
  },
  FirstLine: {
    marginLeft: 25,
    marginTop: 15,
  },
  Text3: {
    fontFamily: "BVPB",
    color: "white",
    fontSize: 25,
  },
  Text4: {
    fontFamily: "BVPB",
    color: "white",
    fontSize: 18,
    marginLeft: 5,
  },
  Divider: {
    width: 430,
    height: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 15,
    alignSelf: "center",
  },
  SecondLine: {
    alignItems: "flex-end",
    marginTop: 35,
    marginRight: 30,
  },
  SecondLine1: {
    alignItems: "flex-end",
    marginTop: 65,
    marginRight: 30,
  },
  Text5: {
    fontFamily: "BVPB",
    fontSize: 40,
    color: "white",
  },
  Rectangle2: {
    height: 60,
    width: 352,
    backgroundColor: "#FACC43",
    borderRadius: 10,
    marginTop: 15,
    justifyContent: "center",
  },
});
