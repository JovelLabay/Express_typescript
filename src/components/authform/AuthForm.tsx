import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import { styles } from "./authForm.styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/styles";
import LineSeparator from "../lineseparator/LineSeparator";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../../modules/interface";
import { authScreenNavigationType } from "../../../modules/interface";
import {
  siginWithEmailPassword,
  validationOfPassword,
} from "../../../functions/signInWithEmailPass";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { Notifier, Easing, NotifierComponents } from "react-native-notifier";
import Notifying, { NotifyingSuccess } from "../notifier/Notifying";

function LoginForm() {
  const [isPassWordVisible, setIsPasswordVisible] = useState(true);
  const password = useRef<TextInput | null>(null);

  const navigation = useNavigation<authScreenNavigationType>();

  return (
    <View style={styles.container}>
      <Text style={styles.authTitle}>Login to your Account</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          const { email, password } = values;
          const response = siginWithEmailPassword({
            email,
            password,
          }).signItNow();

          response
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });

          actions.resetForm();
        }}
      >
        {(props) => {
          return (
            <View>
              <TextInput
                keyboardType="email-address"
                placeholder="Email Address"
                style={styles.authInput}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                returnKeyType="next"
                onSubmitEditing={() => password.current?.focus()}
              />
              <View style={styles.authInput}>
                <TextInput
                  ref={password}
                  placeholder="Password"
                  style={styles.authInputPass}
                  secureTextEntry={isPassWordVisible}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  returnKeyType="go"
                  onSubmitEditing={() => props.handleSubmit()}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPassWordVisible)}
                >
                  {isPassWordVisible ? (
                    <Ionicons
                      name="eye-off-outline"
                      size={24}
                      color={colors.fontColor}
                    />
                  ) : (
                    <Ionicons
                      name="eye-outline"
                      size={24}
                      color={colors.fontColor}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.authButton}
                onPress={() => props.handleSubmit()}
              >
                <Text style={styles.authButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
      <TouchableOpacity>
        <Text style={styles.authForgotPass}>Forgot Password?</Text>
      </TouchableOpacity>
      <LineSeparator />
      <View style={styles.createAccount}>
        <Text>{"Don't have an account? "}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Signup", {
              yawa: "skdflshdjfshkdjfhskjdf",
            })
          }
        >
          <Text style={styles.authAignUp}>Sign Up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function SigninForm() {
  const [isPassWordVisible, setIsPasswordVisible] = useState(true);
  const password = useRef<TextInput | null>(null);
  const confirmPassword = useRef<TextInput | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.authTitle}>Create your Account</Text>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(values, actions) => {
          const { email, password, confirmPassword } = values;
          const responsePasswordValidation = validationOfPassword(
            email,
            password,
            confirmPassword
          );

          if (responsePasswordValidation !== "Successful") {
            Notifier.showNotification({
              description: responsePasswordValidation,
              duration: 3000,
              showAnimationDuration: 800,
              showEasing: Easing.ease,
              Component: Notifying,
            });
          } else {
            const response = siginWithEmailPassword({
              email,
              password: confirmPassword,
            }).loginItNow();
            response
              .then((res) => {
                Notifier.showNotification({
                  description: JSON.stringify(res),
                  duration: 3000,
                  showAnimationDuration: 800,
                  showEasing: Easing.ease,
                  Component: NotifyingSuccess,
                });
              })
              .catch((err) => {
                Notifier.showNotification({
                  description: JSON.stringify(err),
                  duration: 3000,
                  showAnimationDuration: 800,
                  showEasing: Easing.ease,
                  Component: Notifying,
                });
              });
          }

          actions.resetForm({
            values: {
              email: values.email,
              password: "",
              confirmPassword: "",
            },
          });
        }}
      >
        {(props) => {
          return (
            <View>
              <TextInput
                keyboardType="email-address"
                placeholder="Email Address"
                style={styles.authInput}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                returnKeyType="next"
                onSubmitEditing={() => password.current?.focus()}
              />
              <TextInput
                ref={password}
                placeholder="Password"
                style={styles.authInput}
                secureTextEntry={isPassWordVisible}
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                returnKeyType="next"
                onSubmitEditing={() => confirmPassword.current?.focus()}
              />

              <View style={styles.authInput}>
                <TextInput
                  ref={confirmPassword}
                  placeholder="Confirm Password"
                  style={styles.authInputPass}
                  secureTextEntry={isPassWordVisible}
                  onChangeText={props.handleChange("confirmPassword")}
                  value={props.values.confirmPassword}
                  returnKeyType="go"
                  onSubmitEditing={() => props.handleSubmit()}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPassWordVisible)}
                >
                  {isPassWordVisible ? (
                    <Ionicons
                      name="eye-off-outline"
                      size={24}
                      color={colors.fontColor}
                    />
                  ) : (
                    <Ionicons
                      name="eye-outline"
                      size={24}
                      color={colors.fontColor}
                    />
                  )}
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.authButton}
                onPress={() => props.handleSubmit()}
              >
                <Text style={styles.authButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
      <Text style={styles.aggreedtext}>
        *Once you create your account that means you aggreed to the Terms and
        Condition of this Software.
      </Text>
    </View>
  );
}

export { LoginForm, SigninForm };
