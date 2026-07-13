import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

interface InputFieldProps extends TextInputProps {
  label: string;
}

export default function InputField({
  label,
  ...props
}: InputFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },

  label: {
    marginBottom: 8,
    color: Colors.textPrimary,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.semibold,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: Typography.fontSize.md,
    color: Colors.textPrimary,
    backgroundColor: "#FFFFFF",
  },
});