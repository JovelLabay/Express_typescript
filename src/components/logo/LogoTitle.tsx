import React from "react";
import { View, Text } from "react-native";

import styles from "./logoTitle.styles";

import JSON from ".././../../app.json";

export default function LogoTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.logoName}>{JSON.expo.name}</Text>
    </View>
  );
}
