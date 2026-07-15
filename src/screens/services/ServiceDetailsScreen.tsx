import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import PrimaryButton from "../../components/PrimaryButton";
import ServiceFeatureRow from "../../components/services/ServiceFeatureRow";
import PriceTag from "../../components/services/PriceTag";
import AvailabilityBadge from "../../components/services/AvailabilityBadge";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function ServiceDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>
          Service Details
        </Text>

        <AvailabilityBadge available={true} />

        <Text style={styles.provider}>
          Rapid Tow Services
        </Text>

        <PriceTag price="₦25,000" />

        <ServiceFeatureRow
          label="Availability"
          value="24/7"
        />

        <ServiceFeatureRow
          label="Estimated Arrival"
          value="25 mins"
        />

        <ServiceFeatureRow
          label="Coverage"
          value="Within City"
        />

        <PrimaryButton
          title="Book Service"
          onPress={() => {}}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    padding: Spacing.lg,
  },

  title: {
    fontSize: Typography.fontSize.xxxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    marginBottom: Spacing.lg,
  },

  provider: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.md,
    color: Colors.text,
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
  },
});