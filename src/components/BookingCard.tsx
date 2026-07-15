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

type BookingCardProps = {
  mechanic: string;
  service: string;
  date: string;
  status: string;
  onPress: () => void;
};

export default function BookingCard({
  mechanic,
  service,
  date,
  status,
  onPress,
}: BookingCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.mechanic}>
        {mechanic}
      </Text>

      <Text style={styles.service}>
        {service}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.date}>
          {date}
        </Text>

        <Text style={styles.status}>
          {status}
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

  mechanic: {
    color: Colors.text,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
  },

  service: {
    marginTop: Spacing.xs,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
  },

  footer: {
    marginTop: Spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  date: {
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.sm,
  },

  status: {
    color: Colors.primary,
    fontWeight: Typography.fontWeight.semibold,
    fontSize: Typography.fontSize.sm,
  },
});