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

interface BookingCardProps {

  mechanic: string;

  service: string;

  date: string;

  status: string;

  onPress: () => void;

}

export default function BookingCard({

  mechanic,

  service,

  date,

  status,

  onPress,

}: BookingCardProps) {

  return (

    <Pressable

      style={styles.card}

      onPress={onPress}

    >

      <Text style={styles.service}>

        {service}

      </Text>

      <Text style={styles.provider}>

        {mechanic}

      </Text>

      <Text style={styles.date}>

        {date}

      </Text>

      <View style={styles.row}>

        <Text style={styles.status}>

          {status}

        </Text>

        <Text style={styles.view}>

          View →

        </Text>

      </View>

    </Pressable>

  );

}

const styles = StyleSheet.create({

  card: {

    backgroundColor: Colors.surface,

    borderRadius: 16,

    padding: Spacing.lg,

    marginBottom: Spacing.md,

    elevation: 2,

  },

  service: {

    fontSize: Typography.fontSize.lg,

    fontWeight: Typography.fontWeight.bold,

    color: Colors.text,

    marginBottom: 6,

  },

  provider: {

    fontSize: Typography.fontSize.md,

    color: Colors.textSecondary,

    marginBottom: 4,

  },

  date: {

    fontSize: Typography.fontSize.sm,

    color: Colors.textSecondary,

    marginBottom: Spacing.md,

  },

  row: {

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

  },

  status: {

    color: Colors.success,

    fontWeight: Typography.fontWeight.semibold,

  },

  view: {

    color: Colors.primary,

    fontWeight: Typography.fontWeight.bold,

  },

});