import React from "react";
import { View, Text } from "react-native";

import styles from "./notifier.styles";

// NOTIFICATION FOR ERROR
export default function Notifying({ description }: { description: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{description}</Text>
    </View>
  );
}
// NOTIFCATION FOR SUCCESS
export function NotifyingSuccess({ description }: { description: string }) {
  return (
    <View style={styles.containerSuccess}>
      <Text style={styles.error}>{description}</Text>
    </View>
  );
}
