import React, { useState, useEffect } from "react";

import { auth } from "../../firebase/firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";

import MainScreen from "../stacks/MainScreen";
import AuthScreen from "../stacks/AuthScreen";
import EmailValidationScreen from "../stacks/EmailValidationScreen";

import { prolongSplash, showScreen } from "./../../functions/splashScreen";

import { NativeBaseProvider } from "native-base";

import { Text } from "native-base";

export default function Authentication() {
  // STATE HOLDER FOR AUTHENTICATION
  const [initializing, setInitializing] = useState<boolean>(true);
  const [userState, setUserState] = useState<User | null>();

  // LISTENER FOR AUTHENTICATION CHANGES
  const authListener = (user: User | null) => {
    setUserState(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, authListener);

    return subscriber();
  }, []);

  if (initializing) {
    prolongSplash();
  } else {
    showScreen();
  }
  if (!userState) return <AuthScreen />;

  // VALIDATE IF THE USER EMAIL IS VALIDATED
  const isEmailValidate = userState.emailVerified;

  return (
    <NativeBaseProvider>
      {isEmailValidate ? <MainScreen /> : <EmailValidationScreen />}
    </NativeBaseProvider>
  );
}
