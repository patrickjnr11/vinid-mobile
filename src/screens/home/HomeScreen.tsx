import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import HomeHeader from "../../components/HomeHeader";
import QuickActionCard from "../../components/QuickActionCard";
import SectionCard from "../../components/SectionCard";
import PrimaryButton from "../../components/PrimaryButton";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <HomeHeader userName="Patrick" />

        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.grid}>

          <QuickActionCard
            emoji="🛠"
            title="Find Mechanic"
           onPress={() => navigation.navigate("Mechanics")}
          />

          <QuickActionCard
            emoji="🚗"
            title="Vehicle Services"
           onPress={() => navigation.navigate("Services")}
          />

          <QuickActionCard
            emoji="🚨"
            title="Emergency Towing"
            onPress={() => navigation.navigate("EmergencyTowing")}
          />

          <QuickActionCard
            emoji="⚙️"
            title="Spare Parts"
            onPress={() => navigation.navigate("SpareParts")}
          />

        </View>

        <SectionCard title="My Vehicles">

          <Text style={styles.body}>
            Manage all your registered vehicles.
          </Text>

          <View style={styles.buttonSpacing}>
            <PrimaryButton
              title="View My Vehicles"
              onPress={() => navigation.navigate("MyVehicles")}
            />
          </View>

        </SectionCard>

        <SectionCard title="Recent Activity">

          <Text style={styles.body}>
            You haven't made any bookings yet.
          </Text>

        </SectionCard>

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

  sectionTitle: {
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text,
    marginBottom: Spacing.md,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: Spacing.lg,
  },

  body: {
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
    lineHeight: 22,
  },

  buttonSpacing: {
    marginTop: Spacing.md,
  },
});