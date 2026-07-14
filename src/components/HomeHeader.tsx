import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../theme/colors";
import { Typography } from "../theme/typography";
import { Spacing } from "../theme/spacing";

type HomeHeaderProps = {
  userName: string;
};

export default function HomeHeader({
  userName,
}: HomeHeaderProps) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        VINID
      </Text>

      <Text style={styles.greeting}>
        {greeting} 👋
      </Text>

      <Text style={styles.name}>
        {userName}
      </Text>

      <Text style={styles.subtitle}>
        Connecting you with trusted vehicle experts.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xl,
  },

  logo: {
    color: Colors.primary,
    fontSize: Typography.fontSize.xxl,
    fontWeight: Typography.fontWeight.bold,
    marginBottom: Spacing.md,
  },

  greeting: {
    fontSize: Typography.fontSize.lg,
    color: Colors.textSecondary,
  },

  name: {
    marginTop: 4,
    fontSize: Typography.fontSize.xxxl,
    color: Colors.text,
    fontWeight: Typography.fontWeight.bold,
  },

  subtitle: {
    marginTop: Spacing.sm,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
    lineHeight: 24,
  },
});