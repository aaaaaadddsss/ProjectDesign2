import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import SplashScreen from "./SplashScreen"; // Assuming SplashScreen.js is in the same directory

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading time with setTimeout
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
