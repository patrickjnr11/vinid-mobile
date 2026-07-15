import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

type AvailabilityBadgeProps = {
  available: boolean;
};

export default function AvailabilityBadge({
  available,
}: AvailabilityBadgeProps) {
  return (
    <Text
      style={[
        styles.badge,
        {
          backgroundColor: available
            ? "#DCFCE7"
            : "#FEE2E2",
          color: available
            ? "#15803D"
            : "#B91C1C",
        },
      ]}
    >
      {available ? "Available" : "Unavailable"}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.semibold,
  },
});