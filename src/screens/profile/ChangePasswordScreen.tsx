import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import PasswordField from "../../components/PasswordField";
import PrimaryButton from "../../components/PrimaryButton";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function ChangePasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Change Password
      </Text>

      <PasswordField
        label="Current Password"
        placeholder="Enter current password"
        value=""
        onChangeText={() => {}}
      />

      <PasswordField
        label="New Password"
        placeholder="Enter new password"
        value=""
        onChangeText={() => {}}
      />

      <PasswordField
        label="Confirm Password"
        placeholder="Confirm new password"
        value=""
        onChangeText={() => {}}
      />

      <PrimaryButton
        title="Update Password"
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
});