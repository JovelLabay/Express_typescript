import React from "react";

// NAVIGATION CONTAINER
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

// NAVIGATION
import { changeNavigationBar } from "./functions/navigationBar";

// AUTHENTICATION LAYOUT
import Authentication from "./src/layouts/Authentication";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { NotifierWrapper } from "react-native-notifier";

export default function App() {
  // CHANGE NAVIGATION BAR ON THE FIRST LAUNCH
  React.useEffect(() => {
    changeNavigationBar();
  }, []);

  return (
    // REACT NAVIGATION WRAPPER
    <NavigationContainer>
      <NotifierWrapper>
        <Authentication />
      </NotifierWrapper>
    </NavigationContainer>
  );
}
