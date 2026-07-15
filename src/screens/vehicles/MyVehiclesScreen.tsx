import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import VehicleCard from "../../components/VehicleCard";
import PrimaryButton from "../../components/PrimaryButton";

import { vehicles } from "../../data/vehicles";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function MyVehiclesScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          My Vehicles
        </Text>

        <Text style={styles.subtitle}>
          Manage all your registered vehicles.
        </Text>

        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            make={vehicle.make}
            model={vehicle.model}
            year={vehicle.year}
            plateNumber={vehicle.plateNumber}
            onPress={() =>
              navigation.navigate("VehicleDetails")
            }
          />
        ))}

        <PrimaryButton
          title="Add Vehicle"
          onPress={() =>
            navigation.navigate("AddVehicle")
          }
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
  },
});