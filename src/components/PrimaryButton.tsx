import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  GestureResponderEvent,
} from "react-native";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";

type PrimaryButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default function PrimaryButton({
  title,
  onPress,
}: PrimaryButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});