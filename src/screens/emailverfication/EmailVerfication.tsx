import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./emailVerfication.styles";
import { Box, StatusBar } from "native-base";
import { colors, opacity } from "../../../styles/styles";
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
      <Text style={styles.validationTitle}>EmailVerfication</Text>

      {/* MESSAGE BODY */}
      <Box
        marginY={10}
        h={250}
        bg={colors.opacityColor}
        paddingX={10}
        borderRadius={5}
        marginX={5}
        justifyContent="center"
        alignItems="center"
        shadow="7"
      >
        <Text style={styles.textBtnValidationTitle}>
          Verification code has been sent to your email.
        </Text>
        <Text style={styles.textBtnValidation_two}>
          Check your spam if it does not show in inboxes
        </Text>
        <Text style={styles.textBtnValidation_two}>Thank You.</Text>
      </Box>

      <Box
        marginY={5}
        h={180}
        bg={colors.opacityColorRed}
        paddingX={10}
        borderRadius={5}
        marginX={5}
        justifyContent="center"
        alignItems="center"
        shadow="7"
      >
        <Text style={styles.textBtnValidationTitle}>Cation</Text>
        <Text style={styles.textBtnValidation_two}>
          This Modal will not dismiss until you verify your email
        </Text>
      </Box>

      {/* BUTTON SEND A VALIDATION EMAIL */}
      <TouchableOpacity
        style={styles.sendValidation}
        onPress={() => navigation.navigate("TermsCondition")}
      >
        <Text style={styles.textBtnValidation}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
