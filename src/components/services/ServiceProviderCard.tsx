import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

import RatingStars from "../RatingStars";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

type ServiceProviderCardProps = {
  name: string;
  rating: number;
  service: string;
  onPress: () => void;
};

export default function ServiceProviderCard({
  name,
  rating,
  service,
  onPress,
}: ServiceProviderCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.service}>
        {service}
      </Text>

      <RatingStars rating={rating} />
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

  name: {
    color: Colors.text,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
  },

  service: {
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
    marginBottom: Spacing.sm,
    fontSize: Typography.fontSize.md,
  },
});