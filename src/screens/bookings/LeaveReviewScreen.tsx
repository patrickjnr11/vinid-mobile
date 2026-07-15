import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import InputField from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";
import RatingStars from "../../components/RatingStars";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function LeaveReviewScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Leave Review
      </Text>

      <Text style={styles.label}>
        Your Rating
      </Text>

      <RatingStars rating={5} />

      <InputField
        label="Comment"
        placeholder="Share your experience..."
        value=""
        onChangeText={() => {}}
      />

      <PrimaryButton
        title="Submit Review"
        onPress={() => {}}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },

  title: {
    fontSize: Typography.fontSize.xxxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    marginBottom: Spacing.xl,
  },

  label: {
    color: Colors.text,
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.semibold,
    marginBottom: Spacing.sm,
  },
});