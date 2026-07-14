import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

type SectionCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionCard({
  title,
  children,
}: SectionCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  title: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
    marginBottom: Spacing.md,
  },

  content: {
    gap: Spacing.sm,
  },
});