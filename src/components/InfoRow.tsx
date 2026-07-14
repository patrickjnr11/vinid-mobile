import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

type InfoRowProps = {
  label: string;
  value: string;
};

export default function InfoRow({
  label,
  value,
}: InfoRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  label: {
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
  },

  value: {
    color: Colors.text,
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.semibold,
  },
});