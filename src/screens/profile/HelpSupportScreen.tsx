import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import SectionCard from "../../components/SectionCard";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function HelpSupportScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Help & Support
      </Text>

      <SectionCard title="Contact Us">

        <Text style={styles.item}>
          📧 support@vinid.app
        </Text>

        <Text style={styles.item}>
          📞 +234 800 000 0000
        </Text>

        <Text style={styles.item}>
          🌐 www.vinid.app
        </Text>

      </SectionCard>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },

  title: {
    fontSize: Typography.fontSize.xxxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    marginBottom: Spacing.xl,
  },

  item: {
    color: Colors.text,
    fontSize: Typography.fontSize.md,
    marginBottom: Spacing.md,
  },
});