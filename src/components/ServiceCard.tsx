import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

type ServiceCardProps = {
  emoji: string;
  title: string;
  description: string;
  onPress: () => void;
};

export default function ServiceCard({
  emoji,
  title,
  description,
  onPress,
}: ServiceCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          {emoji}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>

        <Text style={styles.action}>
          Explore →
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.lg,
    marginBottom: Spacing.md,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  pressed: {
    opacity: 0.85,
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#EEF5FB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: Spacing.md,
  },

  icon: {
    fontSize: 28,
  },

  content: {
    flex: 1,
  },

  title: {
    color: Colors.text,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
  },

  description: {
    marginTop: 4,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.sm,
    lineHeight: 20,
  },

  action: {
    marginTop: Spacing.sm,
    color: Colors.primary,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.semibold,
  },
});