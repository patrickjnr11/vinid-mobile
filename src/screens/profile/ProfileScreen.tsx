import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Profile Screen
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
  },
});