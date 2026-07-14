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

type MechanicCardProps = {
  name: string;
  rating: number;
  distance: string;
  verified: boolean;
  onPress: () => void;
};

export default function MechanicCard({
  name,
  rating,
  distance,
  verified,
  onPress,
}: MechanicCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          🔧
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>
          {name}
        </Text>

        <Text style={styles.rating}>
          ⭐ {rating.toFixed(1)}
        </Text>

        <Text style={styles.distance}>
          📍 {distance}
        </Text>

        {verified && (
          <Text style={styles.verified}>
            ✔ Verified Mechanic
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.lg,
    marginBottom: Spacing.md,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  pressed: {
    opacity: 0.85,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#EEF5FB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: Spacing.md,
  },

  avatarText: {
    fontSize: 30,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  name: {
    color: Colors.text,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
  },

  rating: {
    marginTop: 4,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.sm,
  },

  distance: {
    marginTop: 2,
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.sm,
  },

  verified: {
    marginTop: Spacing.sm,
    color: Colors.success,
    fontWeight: Typography.fontWeight.semibold,
    fontSize: Typography.fontSize.sm,
  },
});