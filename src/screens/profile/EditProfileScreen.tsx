import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import InputField from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function EditProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Edit Profile
      </Text>

      <InputField
        label="Full Name"
        placeholder="Patrick Junior"
        value=""
        onChangeText={() => {}}
      />

      <InputField
        label="Email Address"
        placeholder="patrick@email.com"
        value=""
        onChangeText={() => {}}
      />

      <InputField
        label="Phone Number"
        placeholder="+234..."
        value=""
        onChangeText={() => {}}
      />

      <PrimaryButton
        title="Save Changes"
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