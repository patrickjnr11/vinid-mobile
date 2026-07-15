import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import RatingStars from "./RatingStars";

import { Colors } from "../theme/colors";
import { Typography } from "../theme/typography";
import { Spacing } from "../theme/spacing";

type ReviewCardProps = {
  mechanic: string;
  rating: number;
  comment: string;
  date: string;
};

export default function ReviewCard({
  mechanic,
  rating,
  comment,
  date,
}: ReviewCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.mechanic}>
        {mechanic}
      </Text>

      <RatingStars rating={rating} />

      <Text style={styles.comment}>
        {comment}
      </Text>

      <Text style={styles.date}>
        {date}
      </Text>
    </View>
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

  mechanic: {
    color: Colors.text,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
  },

  comment: {
    marginTop: Spacing.md,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
    lineHeight: 22,
  },

  date: {
    marginTop: Spacing.md,
    color: Colors.primary,
    fontSize: Typography.fontSize.sm,
  },
});