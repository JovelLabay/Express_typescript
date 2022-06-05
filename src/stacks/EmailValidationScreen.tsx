import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { EmailValidationParamList } from "../../modules/interface";
import EmailVerfication from "../screens/emailverfication/EmailVerfication";
import TermsCondition from "../screens/termsconditions/TermsCondition";

const EmailValidationStack = createStackNavigator<EmailValidationParamList>();

export default function EmailValidationScreen() {
  return (
    <EmailValidationStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <EmailValidationStack.Screen
        name="EmailValidation"
        component={EmailVerfication}
      />
      <EmailValidationStack.Screen
        name="TermsCondition"
        component={TermsCondition}
      />
    </EmailValidationStack.Navigator>
  );
}
