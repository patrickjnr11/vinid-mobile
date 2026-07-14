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

type QuickActionCardProps = {
  emoji: string;
  title: string;
  onPress: () => void;
};

export default function QuickActionCard({
  emoji,
  title,
  onPress,
}: QuickActionCardProps) {
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

      <Text style={styles.title}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
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
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#EEF5FB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.md,
  },

  icon: {
    fontSize: 24,
  },

  title: {
    color: Colors.text,
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.semibold,
    lineHeight: 22,
  },
});