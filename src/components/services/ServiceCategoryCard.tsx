import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

type ServiceCategoryCardProps = {
  emoji: string;
  title: string;
  onPress: () => void;
};

export default function ServiceCategoryCard({
  emoji,
  title,
  onPress,
}: ServiceCategoryCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.emoji}>
        {emoji}
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.md,
    elevation: 2,
  },

  pressed: {
    opacity: 0.85,
  },

  emoji: {
    fontSize: 34,
    marginBottom: Spacing.sm,
  },

  title: {
    color: Colors.text,
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.semibold,
    textAlign: "center",
  },
});