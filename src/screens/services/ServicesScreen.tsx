import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import ServiceCard from "../../components/ServiceCard";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function ServicesScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Services
        </Text>

        <Text style={styles.subtitle}>
          Choose the service you need from trusted vehicle professionals.
        </Text>

        <ServiceCard
          emoji="🛠"
          title="Mechanic"
          description="Find experienced mechanics near you."
          onPress={() => navigation.navigate("Mechanics")}
        />

        <ServiceCard
          emoji="🚗"
          title="Vehicle Servicing"
          description="Book routine maintenance and servicing."
          onPress={() => {}}
        />

        <ServiceCard
          emoji="🛢"
          title="Oil Change"
          description="Keep your engine running at its best."
          onPress={() => {}}
        />

        <ServiceCard
          emoji="🛞"
          title="Tyre Services"
          description="Tyre replacement, balancing and repairs."
          onPress={() => {}}
        />

        <ServiceCard
          emoji="🔋"
          title="Battery Replacement"
          description="Quick battery testing and replacement."
          onPress={() => {}}
        />

        <ServiceCard
          emoji="🧰"
          title="Diagnostics"
          description="Professional vehicle diagnostics."
          onPress={() => {}}
        />

        <ServiceCard
          emoji="🚨"
          title="Emergency Towing"
          description="24/7 roadside assistance when you need it."
          onPress={() => {}}
        />

        <ServiceCard
          emoji="🚿"
          title="Car Wash"
          description="Keep your vehicle looking brand new."
          onPress={() => {}}
        />
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