import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

type BookingInfoCardProps = {
  mechanic: string;
  service: string;
  location: string;
};

export default function BookingInfoCard({
  mechanic,
  service,
  location,
}: BookingInfoCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Booking Details
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>Mechanic</Text>
        <Text style={styles.value}>{mechanic}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Service</Text>
        <Text style={styles.value}>{service}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  title: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
    marginBottom: Spacing.lg,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing.md,
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