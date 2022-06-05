import { View, Text } from "react-native";
import React from "react";
import { styles } from "./notifier.styles";

export default function Notifying({ description }: { description: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{description}</Text>
    </View>
  );
}
export function NotifyingSuccess({ description }: { description: string }) {
  return (
    <View style={styles.containerSuccess}>
      <Text style={styles.error}>{description}</Text>
    </View>
  );
}
