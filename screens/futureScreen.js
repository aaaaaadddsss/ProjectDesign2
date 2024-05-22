import { StyleSheet, Text, View, Image } from "react-native";

export default function FutureScreen() {
  return (
    <View style={styles.container}>
      {/* First Half */}
      <View style={styles.FirstBox}>
        <View style={styles.Header}>
          <View style={styles.TextContainer}>
            <Text style={styles.Text1}> Future </Text>
            <Text style={styles.Text2}> Health </Text>
          </View>
          <View style={styles.ScooterImage}>
            <Image
              source={require("../assets/images/Scooter.png")}
              resizeMode="contain"
              style={styles.Image}
            />
          </View>
        </View>
      </View>
      {/* End of First Half */}
      {/* Second Half */}
      <View style={styles.SecondBox}>
        <View style={styles.Result}>
          <Text style={styles.Text0}>
            {" "}
            Your battery is safe and no issues in future use
          </Text>
        </View>
        {/* First Rectangle */}
        <View style={styles.Rectangle1}>
          <View style={styles.FirstLine}>
            <Text style={styles.Text3}> Predicted Voltage Health </Text>
            <Image
              source={require("../assets/images/question.png")}
              resizeMode="contain"
              style={styles.Image2}
            />
          </View>
          <View style={styles.SecondLine}>
            <Text style={styles.Text4}> Healthy </Text>
          </View>
        </View>
        {/* End of First Rectangle */}
        {/* Second Rectangle */}
        <View style={styles.Rectangle1}>
          <View style={styles.FirstLine}>
            <Text style={styles.Text3}> Predicted Temperature </Text>
            <Image
              source={require("../assets/images/question.png")}
              resizeMode="contain"
              style={styles.Image2}
            />
          </View>
          <View style={styles.SecondLine}>
            <Text style={styles.Text4}> 35 C </Text>
            <Text style={styles.Text4}> None </Text>
          </View>
        </View>
        {/* End of Second Rectangle */}
        <View style={styles.Divider}></View>
        {/* Third Rectangle */}
        <View style={styles.Rectangle2}>
          <View style={styles.TextContainer1}>
            <Text style={styles.Text5}> Issues </Text>
            <Text style={styles.Text6}> None </Text>
          </View>
        </View>
        {/* End of Third Rectangle */}
        {/* Fourth Rectangle */}
        <View style={styles.Rectangle2}>
          <View style={styles.TextContainer1}>
            <Text style={styles.Text5}> Maintenance </Text>
            <Text style={styles.Text6}> None </Text>
          </View>
        </View>
        {/* End of Fourth Rectangle */}
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
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 47,
    paddingLeft: 55,
  },
  TextContainer: {
    flex: 1,
  },
  Text1: {
    fontFamily: "BVPB",
    fontSize: 45,
    color: "white",
  },
  Text2: {
    fontFamily: "BVPB",
    fontSize: 45,
    color: "white",
  },
  ScooterImage: {
    alignItems: "flex-end",
  },
  Image: {
    width: 150,
    height: 150,
  },
  SecondBox: {
    height: "70%",
    backgroundColor: "#DDE1E1",
    alignItems: "center",
  },
  Result: {
    marginTop: 34,
    marginHorizontal: 20,
    marginBottom: 22,
  },
  Text0: {
    fontFamily: "BVPB",
    fontSize: 25,
    color: "#1F9753",
    textAlign: "center",
  },
  Rectangle1: {
    width: 352,
    height: 120,
    backgroundColor: "#FACC43",
    borderRadius: 10,
    marginTop: 15,
  },
  FirstLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Text3: {
    fontFamily: "BVPB",
    color: "white",
    fontSize: 18,
    marginLeft: 15,
    marginTop: 15,
  },
  Image2: {
    width: 24,
    height: 24,
    marginTop: 15,
    marginRight: 15,
    tintColor: "#1F9753",
  },
  SecondLine: {
    marginTop: 35,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Text4: {
    fontFamily: "BVPB",
    color: "white",
    fontSize: 25,
    marginLeft: 15,
  },
  Divider: {
    width: 352,
    height: 5,
    backgroundColor: "#FACC43",
    borderRadius: 10,
    marginTop: 15,
  },
  Rectangle2: {
    height: 60,
    width: 352,
    backgroundColor: "#FACC43",
    borderRadius: 10,
    marginTop: 15,
    justifyContent: "center",
  },
  TextContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Text5: {
    fontFamily: "BVPB",
    fontSize: 22,
    color: "white",
    marginLeft: 20,
  },
  Text6: {
    fontFamily: "BVPB",
    fontSize: 22,
    color: "white",
    marginRight: 20,
  },
});
