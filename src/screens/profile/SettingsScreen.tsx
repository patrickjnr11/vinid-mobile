import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import ProfileMenuItem from "../../components/ProfileMenuItem";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>
          Settings
        </Text>

        <ProfileMenuItem
          emoji="🔔"
          title="Notifications"
          onPress={() => {}}
        />

        <ProfileMenuItem
          emoji="🔒"
          title="Privacy"
          onPress={() => {}}
        />

        <ProfileMenuItem
          emoji="🌙"
          title="Appearance"
          onPress={() => {}}
        />

        <ProfileMenuItem
          emoji="❓"
          title="Help & Support"
          onPress={() => {}}
        />

        <ProfileMenuItem
          emoji="🚪"
          title="Logout"
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
  },

  title: {
    fontSize: Typography.fontSize.xxxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    marginBottom: Spacing.xl,
  },
});