import React from "react";

import {

  SafeAreaView,

  ScrollView,

  StyleSheet,

  Text,

} from "react-native";

import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../../components/PrimaryButton";

import { Colors } from "../../theme/colors";

import { Spacing } from "../../theme/spacing";

import { Typography } from "../../theme/typography";

export default function BookingScreen() {

  const navigation = useNavigation<any>();

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView

        contentContainerStyle={styles.content}

        showsVerticalScrollIndicator={false}

      >

        <Text style={styles.title}>

          Confirm Booking

        </Text>

        <Text style={styles.label}>Service</Text>

        <Text style={styles.value}>Emergency Towing</Text>

        <Text style={styles.label}>Provider</Text>

        <Text style={styles.value}>Rapid Tow Services</Text>

        <Text style={styles.label}>Estimated Arrival</Text>

        <Text style={styles.value}>20 - 30 Minutes</Text>

        <Text style={styles.label}>Estimated Price</Text>

        <Text style={styles.price}>₦25,000</Text>

        <PrimaryButton

          title="Confirm Booking"

          onPress={() => navigation.navigate("BookingSuccess")}

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

    marginBottom: Spacing.xl,

  },

  label: {

    marginTop: Spacing.md,

    color: Colors.textSecondary,

    fontSize: Typography.fontSize.sm,

  },

  value: {

    fontSize: Typography.fontSize.lg,

    fontWeight: Typography.fontWeight.semibold,

    color: Colors.text,

  },

  price: {

    marginVertical: Spacing.xl,

    fontSize: Typography.fontSize.xxl,

    fontWeight: Typography.fontWeight.bold,

    color: Colors.primary,

  },

});