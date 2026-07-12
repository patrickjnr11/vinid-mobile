import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import ScreenContainer from "../components/ScreenContainer";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

export default function WelcomeScreen() {
  const handleGetStarted = () => {
    Alert.alert(
      "Welcome!",
      "VINID Mobile is under development. 🚗"
    );
  };

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text style={styles.title}>VINID Vehicle Solutions</Text>

        <Text style={styles.subtitle}>
          Connecting You to Trusted Vehicle Experts
        </Text>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Get Started"
            onPress={handleGetStarted}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: Typography.heading,
    fontWeight: "700",
    color: Colors.primary,
    textAlign: "center",
  },
  subtitle: {
    marginTop: Spacing.md,
    fontSize: Typography.body,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: Spacing.xxl,
  },
});