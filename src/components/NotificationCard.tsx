import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "../theme/colors";
import { Typography } from "../theme/typography";
import { Spacing } from "../theme/spacing";

type NotificationCardProps = {
  title: string;
  message: string;
  time: string;
  onPress: () => void;
};

export default function NotificationCard({
  title,
  message,
  time,
  onPress,
}: NotificationCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.message}>
        {message}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.time}>
          {time}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    elevation: 2,
  },

  pressed: {
    opacity: 0.85,
  },

  title: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
  },

  message: {
    marginTop: Spacing.sm,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
    lineHeight: 22,
  },

  footer: {
    marginTop: Spacing.md,
  },

  time: {
    color: Colors.primary,
    fontSize: Typography.fontSize.sm,
  },
});