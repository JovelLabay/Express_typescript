import React from "react";

// EMAIL REACT NAVIGATION STACK
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// STACK NAVIGATION INTERFACE
import { EmailValidationParamList } from "../../modules/interface";

// EMAIL VALIDATION SCREENS
import EmailVerfication from "../screens/emailverfication/EmailVerfication";
import TermsCondition from "../screens/termsconditions/TermsCondition";

const EmailValidationStack = createStackNavigator<EmailValidationParamList>();

export default function EmailValidationScreen() {
  return (
    <EmailValidationStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <EmailValidationStack.Screen
        name="EmailValidation"
        component={EmailVerfication}
        options={{
          title: "Message",
        }}
      />
      <EmailValidationStack.Screen
        name="TermsCondition"
        component={TermsCondition}
        options={{
          title: "Terms & Conditions",
        }}
      />
    </EmailValidationStack.Navigator>
  );
}
