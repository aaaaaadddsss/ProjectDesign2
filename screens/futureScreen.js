import { StyleSheet, Text, View, Image } from "react-native";

export default function FutureScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.FirstBox}>
        <Text style={styles.Header}>FUTURE HEALTH STATUS</Text>
        <Text style={styles.Text1}>Your Next Charge</Text>
        <Text style={styles.Text2}>and Discharge will be</Text>
        <View style={styles.rectangle}>
          <Text style={styles.Text3}> Healthy </Text>
        </View>
      </View>
      <View style={styles.SecondBox}>
        <View style={styles.FirstLine}>
          <Text style={styles.Text4}>
            {" "}
            Your next <Text style={styles.Text5}> 100 </Text>
          </Text>
        </View>
        <Text style={styles.Text6}>
          {" "}
          charge and discharge will be{" "}
          <Text style={styles.Text5}> Safe and No Issue </Text>
        </Text>
        {/* <View style={styles.rectangle1}> */}
        {/* <Text style={styles.Text7}> Safe and No issue </Text> */}
        {/* </View> */}
      </View>
      <View style={styles.ThirdBox}>
        <Text style={styles.Text8}> Your battery's temperature </Text>
        <Text style={styles.Text9}>
          {" "}
          from the past 24 hours is <Text style={styles.Text5}> Normal </Text>
        </Text>
        {/* <View style={styles.rectangle2}> */}
        {/* <Text style={styles.Text10}> Normal </Text> */}
        {/* </View> */}
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
    backgroundColor: "#DDE1E1",
  },
  Header: {
    fontFamily: "BVPB",
    fontSize: 20,
    paddingTop: 24,
    alignSelf: "center",
    color: "#28AB61",
  },
  Text1: {
    fontFamily: "BVPB",
    fontSize: 25,
    paddingLeft: 20,
    paddingTop: 25,
    color: "#1F9753",
  },
  Text2: {
    fontFamily: "BVPB",
    fontSize: 25,
    paddingLeft: 20,
    top: -5,
    color: "#1F9753",
  },
  rectangle: {
    backgroundColor: "#1F9753",
    top: 5,
    padding: 5,
    height: 68,
    width: 205,
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
    marginLeft: 20,
    marginTop: 6,
  },
  Text3: {
    fontFamily: "BVPB",
    fontSize: 35,
    color: "#ffffff",
    alignSelf: "center",
  },
  SecondBox: {
    flex: 1,
    backgroundColor: "#1F9753",
  },
  FirstLine: {
    flexDirection: "row",
    paddingTop: 30,
    paddingLeft: 40,
  },
  Text4: {
    fontFamily: "BVPB",
    fontSize: 35,
    color: "#ffffff",
  },
  Text5: {
    fontFamily: "BVPB",
    fontSize: 45,
  },
  Text6: {
    fontFamily: "BVPB",
    fontSize: 20,
    color: "white",
    paddingLeft: 40,
    top: -5,
  },
  rectangle1: {
    backgroundColor: "#FACC43",
    padding: 5,
    height: 84,
    width: 325,
    borderRadius: 15,
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    alignSelf: "center",
    marginTop: 18,
  },
  Text7: {
    fontFamily: "BVPB",
    fontSize: "30",
    alignSelf: "center",
    color: "white",
  },
  ThirdBox: {
    flex: 1,
    backgroundColor: "#DDE1E1",
  },
  Text8: {
    fontFamily: "BVPB",
    fontSize: 25,
    color: "#1F9753",
    paddingTop: 22,
    paddingLeft: 20,
  },
  Text9: {
    fontFamily: "BVPB",
    fontSize: 25,
    color: "#1F9753",
    paddingTop: 10,
    paddingLeft: 20,
    top: -15,
  },
  rectangle2: {
    backgroundColor: "#1F9753",
    top: -10,
    padding: 5,
    height: 68,
    width: 205,
    borderRadius: 15,
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginLeft: 20,
  },
  Text10: {
    fontFamily: "BVPB",
    fontSize: "30",
    alignSelf: "center",
    color: "white",
  },
  // FourthBox: {
  //   flex: 1,
  //   backgroundColor: "#1F9753",
  // },
});
