import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";
import PrimaryButton from "../../components/PrimaryButton";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>⭐</Text>

        <Text style={styles.title}>
          Drive with{"\n"}Confidence
        </Text>

        <Text style={styles.description}>
          Track your requests, review service providers, manage your vehicles,
          and enjoy peace of mind wherever your journey takes you.
        </Text>

        <View style={styles.indicatorContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
      </View>

      <View style={styles.footer}>
        <PrimaryButton
          title="Get Started"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "space-between",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Spacing.xl,
  },

  icon: {
    fontSize: 90,
    marginBottom: Spacing.xl,
  },

  title: {
    fontSize: Typography.fontSize.xxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    textAlign: "center",
    marginBottom: Spacing.lg,
  },

  description: {
    fontSize: Typography.fontSize.md,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: Spacing.xxl,
  },

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Spacing.lg,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 5,
  },

  activeDot: {
    width: 24,
    backgroundColor: Colors.primary,
  },

  footer: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
});