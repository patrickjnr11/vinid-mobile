import React from "react";

import {

  SafeAreaView,

  StyleSheet,

  Text,

} from "react-native";

import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../../components/PrimaryButton";

import { Colors } from "../../theme/colors";

import { Typography } from "../../theme/typography";

import { Spacing } from "../../theme/spacing";

export default function BookingSuccessScreen() {

  const navigation = useNavigation<any>();

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.icon}>

        ✅

      </Text>

      <Text style={styles.title}>

        Booking Successful

      </Text>

      <Text style={styles.message}>

        Your booking has been confirmed successfully.

      </Text>

      <PrimaryButton

        title="View Booking History"

        onPress={() => navigation.navigate("BookingHistory")}

      />

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    padding: Spacing.xl,

    backgroundColor: Colors.background,

  },

  icon: {

    fontSize: 72,

    marginBottom: Spacing.lg,

  },

  title: {

    fontSize: Typography.fontSize.xxxl,

    fontWeight: Typography.fontWeight.bold,

    color: Colors.primary,

    marginBottom: Spacing.md,

  },

  message: {

    textAlign: "center",

    color: Colors.textSecondary,

    marginBottom: Spacing.xxl,

  },

});