import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AuthStackParamList, TheProps } from "../../..//modules/interface";
import { SigninForm } from "../../components/authform/AuthForm";
import { styles } from "./siginup.styles";
import LogoTitle from "../../components/logo/LogoTitle";
import { colors } from "../../../styles/styles";

export default function SignupScreen() {
  const route = useRoute<TheProps>();

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
