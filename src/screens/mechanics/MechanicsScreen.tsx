import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import MechanicCard from "../../components/MechanicCard";
import { mechanics } from "../../data/mechanics";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function MechanicsScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Find Mechanics
        </Text>

        <Text style={styles.subtitle}>
          Browse trusted mechanics near you.
        </Text>

        {mechanics.map((mechanic) => (
          <MechanicCard
            key={mechanic.id}
            name={mechanic.name}
            rating={mechanic.rating}
            distance={mechanic.distance}
            verified={mechanic.verified}
            onPress={() => navigation.navigate("MechanicDetails")}
          />
        ))}
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
    lineHeight: 22,
  },
});