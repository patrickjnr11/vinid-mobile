import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../../components/PrimaryButton";
import SectionCard from "../../components/SectionCard";
import InfoRow from "../../components/InfoRow";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function MechanicDetailsScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.emoji}>🔧</Text>

          <Text style={styles.name}>
            AutoFix Garage
          </Text>

          <Text style={styles.rating}>
            ⭐ 4.9 • Verified Mechanic
          </Text>

          <Text style={styles.distance}>
            📍 2.3 km away
          </Text>
        </View>

        <SectionCard title="Garage Information">
          <InfoRow label="Phone" value="+234 800 123 4567" />
          <InfoRow label="Experience" value="10 Years" />
          <InfoRow label="Availability" value="Mon - Sat" />
          <InfoRow label="Opening Hours" value="8:00 AM - 6:00 PM" />
        </SectionCard>

        <SectionCard title="Services Offered">
          <Text style={styles.body}>
            • General Repairs{"\n"}
            • Engine Diagnostics{"\n"}
            • Oil Change{"\n"}
            • Brake Service{"\n"}
            • Battery Replacement{"\n"}
            • Suspension Repairs
          </Text>
        </SectionCard>

        <SectionCard title="About">
          <Text style={styles.body}>
            AutoFix Garage is one of the highest-rated workshops in the area,
            known for reliable service, experienced technicians and affordable
            pricing.
          </Text>
        </SectionCard>

        <PrimaryButton
          title="Book Appointment"
          onPress={() => navigation.navigate("Booking")}
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
    paddingBottom: Spacing.xxl,
  },
  header: {
    alignItems: "center",
    marginBottom: Spacing.xl,
  },
  emoji: {
    fontSize: 64,
    marginBottom: Spacing.md,
  },
  name: {
    fontSize: Typography.fontSize.xxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
  },
  rating: {
    marginTop: Spacing.sm,
    color: Colors.success,
    fontSize: Typography.fontSize.md,
  },
  distance: {
    marginTop: Spacing.xs,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.sm,
  },
  body: {
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
    lineHeight: 24,
  },
});