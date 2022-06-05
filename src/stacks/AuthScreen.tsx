import React from "react";

import LoginScreen from "../screens/login/LoginScreen";
import SignupScreen from "../screens/signup/SignupScreen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { AuthStackParamList } from "../../modules/interface";

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
