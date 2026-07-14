import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import BookingInfoCard from "../../components/BookingInfoCard";
import PrimaryButton from "../../components/PrimaryButton";

import { timeSlots } from "../../data/timeSlots";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function BookingScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Book Appointment
        </Text>

        <Text style={styles.subtitle}>
          Confirm your booking details.
        </Text>

        <BookingInfoCard
          mechanic="AutoFix Garage"
          service="General Repairs"
          location="Jos, Plateau"
        />

        <Text style={styles.sectionTitle}>
          Available Time Slots
        </Text>

        {timeSlots.map((slot) => (
          <Text
            key={slot}
            style={styles.slot}
          >
            🕒 {slot}
          </Text>
        ))}

        <PrimaryButton
          title="Confirm Booking"
          onPress={() =>
            navigation.navigate("BookingSuccess")
          }
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

  title: {
    fontSize: Typography.fontSize.xxxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
  },

  subtitle: {
    marginTop: Spacing.sm,
    marginBottom: Spacing.xl,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
  },

  sectionTitle: {
    marginBottom: Spacing.md,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
  },

  slot: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: 12,
    marginBottom: Spacing.sm,
    color: Colors.text,
    fontSize: Typography.fontSize.md,
  },
});