import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

// AUTH STACK PARAMETERS
export type AuthStackParamList = {
  Login: undefined;
  Signup: {
    yawa: string;
  };
};
export type authScreenNavigationType = StackNavigationProp<AuthStackParamList>;
export type TheProps = RouteProp<AuthStackParamList>;

// EMAIL VALIDATION STACK PARAMETERS
export type EmailValidationParamList = {
  EmailValidation: undefined;
  TermsCondition: undefined;
};
export type emailValicationScreennavigationType =
  StackNavigationProp<EmailValidationParamList>;

// SIGIN WITH EMAIL AND PASSWORD
export interface EmailPassword {
  email: string;
  password: string;
}
