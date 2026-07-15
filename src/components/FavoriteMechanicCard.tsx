import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import RatingStars from "./RatingStars";

import { Colors } from "../theme/colors";
import { Typography } from "../theme/typography";
import { Spacing } from "../theme/spacing";

type FavoriteMechanicCardProps = {
  name: string;
  specialty: string;
  rating: number;
  onPress: () => void;
};

export default function FavoriteMechanicCard({
  name,
  specialty,
  rating,
  onPress,
}: FavoriteMechanicCardProps) {
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

      <Text style={styles.specialty}>
        {specialty}
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

  specialty: {
    marginTop: Spacing.xs,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
  },
});