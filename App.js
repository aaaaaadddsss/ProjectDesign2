import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import HomeScreen from "./screens/homeScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return <>{isLoading ? <SplashScreen /> : <HomeScreen />}</>;
};

export default App;
