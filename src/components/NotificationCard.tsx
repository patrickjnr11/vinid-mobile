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

type NotificationCardProps = {

  title: string;

  message: string;

  date: string;

  unread: boolean;

  onPress: () => void;

};

export default function NotificationCard({

  title,

  message,

  date,

  unread,

  onPress,

}: NotificationCardProps) {

  return (

    <Pressable

      onPress={onPress}

      style={styles.card}

    >

      <View style={styles.header}>

        <Text style={styles.title}>

          {title}

        </Text>

        {unread && (

          <View style={styles.dot} />

        )}

      </View>

      <Text style={styles.message}>

        {message}

      </Text>

      <Text style={styles.date}>

        {date}

      </Text>

    </Pressable>

  );

}

const styles = StyleSheet.create({

  card: {

    backgroundColor: Colors.surface,

    borderRadius: 18,

    padding: Spacing.lg,

    marginBottom: Spacing.md,

    elevation: 2,

  },

  header: {

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: Spacing.sm,

  },

  title: {

    color: Colors.text,

    fontSize: Typography.fontSize.lg,

    fontWeight: Typography.fontWeight.bold,

    flex: 1,

  },

  message: {

    color: Colors.textSecondary,

    fontSize: Typography.fontSize.md,

    marginBottom: Spacing.md,

    lineHeight: 22,

  },

  date: {

    color: Colors.textSecondary,

    fontSize: Typography.fontSize.sm,

  },

  dot: {

    width: 10,

    height: 10,

    borderRadius: 5,

    backgroundColor: Colors.primary,

  },

});