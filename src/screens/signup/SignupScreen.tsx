import React from "react";
import { View, ScrollView, StatusBar } from "react-native";

import { useRoute } from "@react-navigation/native";

import { TheProps } from "../../..//modules/interface";

import { SigninForm } from "../../components/authform/AuthForm";
import LogoTitle from "../../components/logo/LogoTitle";

import { colors } from "../../../styles/styles";
import styles from "./siginup.styles";

export default function SignupScreen() {
  const route = useRoute<TheProps>();

  console.log(route.params?.yawa);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.mainBackgroundColor}
        barStyle="dark-content"
      />
      <ScrollView>
        <LogoTitle />
        <SigninForm />
      </ScrollView>
    </View>
  );
}
