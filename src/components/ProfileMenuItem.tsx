import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

type ProfileMenuItemProps = {
  emoji: string;
  title: string;
  onPress: () => void;
};

export default function ProfileMenuItem({
  emoji,
  title,
  onPress,
}: ProfileMenuItemProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.left}>
        <Text style={styles.emoji}>
          {emoji}
        </Text>

        <Text style={styles.title}>
          {title}
        </Text>
      </View>

      <Text style={styles.arrow}>
        ›
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: Spacing.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.md,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  pressed: {
    opacity: 0.8,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  emoji: {
    fontSize: 22,
    marginRight: Spacing.md,
  },

  title: {
    color: Colors.text,
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.medium,
  },

  arrow: {
    color: Colors.textSecondary,
    fontSize: 24,
  },
});