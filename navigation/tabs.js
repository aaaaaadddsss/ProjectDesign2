import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";
import FutureScreen from "../screens/futureScreen";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import * as Font from "expo-font";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

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
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            position: "absolute",
            bottom: 30,
            elevation: 0,
            left: 86,
            right: 86,
            backgroundColor: "#FFFFFF",
            borderRadius: 25,
            height: 60,
            ...styles.shadow,
            justifyContent: "center",
          },
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/images/home.png")}
                resizeMode="contain"
                style={{
                  width: 22.5,
                  height: 22.5,
                  tintColor: focused ? "#1F9753" : "#DDE1E1",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Future"
        component={FutureScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/images/graph.png")}
                resizeMode="contain"
                style={{
                  width: 22.5,
                  height: 22.5,
                  tintColor: focused ? "#1F9753" : "#DDE1E1",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
