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

export default function AddVehicleScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Add Vehicle
      </Text>

      <InputField
        label="Vehicle Make"
        placeholder="Toyota"
        value=""
        onChangeText={() => {}}
      />

      <InputField
        label="Vehicle Model"
        placeholder="Corolla"
        value=""
        onChangeText={() => {}}
      />

      <InputField
        label="Year"
        placeholder="2018"
        value=""
        onChangeText={() => {}}
      />

      <InputField
        label="Plate Number"
        placeholder="ABC-123-AA"
        value=""
        onChangeText={() => {}}
      />

      <PrimaryButton
        title="Save Vehicle"
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