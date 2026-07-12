import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";
import { Spacing } from "../../theme/spacing";

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>🚗</Text>

        <Text style={styles.title}>VINID</Text>

        <Text style={styles.subtitle}>
          Connecting you to trusted vehicle experts
        </Text>

        <ActivityIndicator
          size="large"
          color={Colors.primary}
          style={styles.loader}
        />
      </View>
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

  content: {
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
  },

  logo: {
    fontSize: 70,
    marginBottom: Spacing.lg,
  },

  title: {
    fontSize: Typography.fontSize.xxxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    marginBottom: Spacing.sm,
  },

  subtitle: {
    fontSize: Typography.fontSize.md,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: Spacing.xl,
    lineHeight: 24,
  },

  loader: {
    marginTop: Spacing.md,
  },
});