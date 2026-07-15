import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import SectionCard from "../../components/SectionCard";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function VehicleDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>
          Vehicle Details
        </Text>

        <SectionCard title="Basic Information">

          <Text style={styles.item}>
            🚗 Toyota Corolla
          </Text>

          <Text style={styles.item}>
            📅 2018
          </Text>

          <Text style={styles.item}>
            🎨 Silver
          </Text>

          <Text style={styles.item}>
            🔖 JOS-248-AA
          </Text>

        </SectionCard>

        <SectionCard title="Maintenance">

          <Text style={styles.item}>
            Last Service: 12 July 2026
          </Text>

          <Text style={styles.item}>
            Next Service: 12 October 2026
          </Text>

        </SectionCard>

      </View>
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
    marginBottom: Spacing.xl,
  },

  item: {
    fontSize: Typography.fontSize.md,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
});