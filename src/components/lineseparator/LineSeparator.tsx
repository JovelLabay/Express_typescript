import { View, Text } from "react-native";
import React from "react";
import { styles } from "./lineSeparator.styles";

export default function LineSeparator() {
  return (
    <View style={styles.container}>
      <View style={styles.left}></View>
      <Text style={styles.or}>OR</Text>
      <View style={styles.right}></View>
    </View>
  );
}
