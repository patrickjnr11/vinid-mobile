import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import SectionCard from "../../components/SectionCard";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function NotificationDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Notification
      </Text>

      <SectionCard title="Booking Confirmed">

        <Text style={styles.body}>
          Your booking with Auto Fix Garage has been confirmed successfully.
        </Text>

        <Text style={styles.time}>
          2 minutes ago
        </Text>

      </SectionCard>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },

  title: {
    fontSize: Typography.fontSize.xxxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    marginBottom: Spacing.xl,
  },

  body: {
    color: Colors.text,
    fontSize: Typography.fontSize.md,
    lineHeight: 24,
  },

  time: {
    marginTop: Spacing.lg,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.sm,
  },
});