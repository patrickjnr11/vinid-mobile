import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import FavoriteMechanicCard from "../../components/FavoriteMechanicCard";
import { favorites } from "../../data/favorites";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>
          Favorite Mechanics
        </Text>

        {favorites.map((mechanic) => (
          <FavoriteMechanicCard
            key={mechanic.id}
            name={mechanic.name}
            specialty={mechanic.specialty}
            rating={mechanic.rating}
            onPress={() => {}}
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
  },

  title: {
    fontSize: Typography.fontSize.xxxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    marginBottom: Spacing.xl,
  },
});