import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

interface PasswordFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function PasswordField({
  label,
  placeholder,
  value,
  onChangeText,
}: PasswordFieldProps) {
  const [hidden, setHidden] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={hidden}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          style={styles.input}
        />

        <Pressable onPress={() => setHidden(!hidden)}>
          <Text style={styles.toggle}>
            {hidden ? "Show" : "Hide"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },

  label: {
    marginBottom: 8,
    color: Colors.text,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.semibold,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 14,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },

  input: {
    flex: 1,
    paddingVertical: 15,
    fontSize: Typography.fontSize.md,
    color: Colors.text,
  },

  toggle: {
    color: Colors.primary,
    fontWeight: Typography.fontWeight.semibold,
  },
});