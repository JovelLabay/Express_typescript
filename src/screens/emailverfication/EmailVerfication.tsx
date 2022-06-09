import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./emailVerfication.styles";
import { colors } from "../../../styles/styles";

import { Box, StatusBar } from "native-base";

import { useNavigation } from "@react-navigation/native";

import { emailValicationScreennavigationType } from "../../../modules/interface";

export default function EmailVerfication() {
  const navigation = useNavigation<emailValicationScreennavigationType>();

  return (
    <View style={styles.conatiner}>
      <StatusBar
        backgroundColor={colors.mainBackgroundColor}
        barStyle="dark-content"
      />

      {/* BODY */}

      {/* BUTTON SEND A VALIDATION EMAIL */}
      <TouchableOpacity
        style={styles.sendValidation}
        onPress={() => navigation.navigate("TermsCondition")}
      >
        <Text style={styles.textBtnValidation}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}
