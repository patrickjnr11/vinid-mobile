import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import SectionCard from "../../components/SectionCard";
import PrimaryButton from "../../components/PrimaryButton";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function BookingDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Booking Details
      </Text>

      <SectionCard title="Service Information">

        <Text style={styles.item}>
          Mechanic: Auto Fix Garage
        </Text>

        <Text style={styles.item}>
          Service: Engine Diagnosis
        </Text>

        <Text style={styles.item}>
          Date: 12 July 2026
        </Text>

        <Text style={styles.item}>
          Status: Completed
        </Text>

      </SectionCard>

      <PrimaryButton
        title="Leave Review"
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

  item: {
    fontSize: Typography.fontSize.md,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
});