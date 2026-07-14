import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../../components/PrimaryButton";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function BookingSuccessScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>
          ✅
        </Text>

        <Text style={styles.title}>
          Booking Confirmed
        </Text>

        <Text style={styles.message}>
          Your appointment has been booked successfully.
        </Text>

        <PrimaryButton
          title="Back to Home"
          onPress={() =>
            navigation.navigate("MainTabs")
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    padding: Spacing.lg,
  },

  content: {
    alignItems: "center",
  },

  icon: {
    fontSize: 72,
    marginBottom: Spacing.lg,
  },

  title: {
    fontSize: Typography.fontSize.xxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.success,
    marginBottom: Spacing.md,
  },

  message: {
    textAlign: "center",
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
    marginBottom: Spacing.xxl,
  },
});