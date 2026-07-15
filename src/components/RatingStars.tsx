import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";

type RatingStarsProps = {
  rating: number;
};

export default function RatingStars({
  rating,
}: RatingStarsProps) {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Text
          key={star}
          style={styles.star}
        >
          {star <= rating ? "⭐" : "☆"}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: Spacing.xs,
  },

  star: {
    fontSize: 18,
    color: Colors.primary,
    marginRight: 2,
  },
});