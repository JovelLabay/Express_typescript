import {
  sendEmailVerification,
  sendPasswordResetEmail,
  User,
} from "firebase/auth";
import { Box, Image } from "native-base";
import React from "react";

import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { auth } from "../../../firebase/firebase.config";
import { colors } from "../../../styles/styles";

import styles from "./termsCondition.styles";

export default function TermsCondition() {
  function sendVerification() {
    function sample() {
      let yawa: any;
      if (auth?.currentUser != undefined) {
        yawa = auth.currentUser;
      } else {
        yawa = null;
      }

      return yawa;
    }

    sendEmailVerification(sample())
      .then((response) => console.log("response"))
      .catch((err) => console.log("err"));
  }

  return (
    <View style={styles.conatiner}>
      <StatusBar
        backgroundColor={colors.mainBackgroundColor}
        barStyle="dark-content"
      />

      {/* BODY */}
      <Box h={300} backgroundColor="amber.100"></Box>

      {/* BUTTON SEND A VALIDATION EMAIL */}
      <View style={styles.buttonsBottom}>
        <TouchableOpacity style={styles.decline}>
          <Text style={styles.btnText1}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.verify} onPress={sendVerification}>
          <Text style={styles.btnText2}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
