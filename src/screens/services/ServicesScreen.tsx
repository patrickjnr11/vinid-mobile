import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import ServiceCategoryCard from "../../components/services/ServiceCategoryCard";

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
          Vehicle Services
        </Text>

        <View style={styles.grid}>

          <ServiceCategoryCard
            emoji="🛠"
            title="Find Mechanic"
            onPress={() => navigation.navigate("Mechanics")}
          />

          <ServiceCategoryCard
            emoji="🚨"
            title="Emergency Towing"
            onPress={() => navigation.navigate("EmergencyTowing")}
          />

          <ServiceCategoryCard
            emoji="🛢"
            title="Oil Change"
            onPress={() => navigation.navigate("OilChange")}
          />

          <ServiceCategoryCard
            emoji="🚗"
            title="Car Wash"
            onPress={() => navigation.navigate("CarWash")}
          />

          <ServiceCategoryCard
            emoji="🔋"
            title="Battery"
            onPress={() => navigation.navigate("BatteryService")}
          />

          <ServiceCategoryCard
            emoji="🛞"
            title="Tyres"
            onPress={() => navigation.navigate("TyreService")}
          />

          <ServiceCategoryCard
            emoji="🆘"
            title="Roadside"
            onPress={() => navigation.navigate("RoadsideAssistance")}
          />

          <ServiceCategoryCard
            emoji="⚙️"
            title="Spare Parts"
            onPress={() => navigation.navigate("SpareParts")}
          />

        </View>
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
    marginBottom: Spacing.xl,
  },

  grid: {
    gap: Spacing.md,
  },
});