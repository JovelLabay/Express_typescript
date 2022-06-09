import React from "react";
import { View, StatusBar, ScrollView } from "react-native";

import { colors } from "../../../styles/styles";
import styles from "./login.styles";

import LogoTitle from "../../components/logo/LogoTitle";
import { LoginForm } from "../../components/authform/AuthForm";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.mainBackgroundColor}
        barStyle="dark-content"
      />
      <ScrollView>
        <LogoTitle />
        <LoginForm />
      </ScrollView>
    </View>
  );
}
