import React from "react";

import {

  SafeAreaView,

  ScrollView,

  StyleSheet,

  Text,

} from "react-native";

import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../../components/PrimaryButton";

import BookingInfoCard from "../../components/BookingInfoCard";

import { Colors } from "../../theme/colors";

import { Spacing } from "../../theme/spacing";

import { Typography } from "../../theme/typography";

export default function BookingDetailsScreen() {

  const navigation = useNavigation<any>();

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView

        contentContainerStyle={styles.content}

        showsVerticalScrollIndicator={false}

      >

        <Text style={styles.title}>

          Booking Details

        </Text>

        <BookingInfoCard

          mechanic="Rapid Tow Services"

          service="Emergency Towing"

          location="Lagos State"

        />

        <Text style={styles.info}>

          Status: Completed

        </Text>

        <Text style={styles.info}>

          Amount Paid: ₦25,000

        </Text>

        <Text style={styles.info}>

          Date: 12 July 2026

        </Text>

        <PrimaryButton

          title="Leave Review"

          onPress={() => navigation.navigate("LeaveReview")}

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

  info: {

    marginBottom: Spacing.md,

    fontSize: Typography.fontSize.md,

    color: Colors.text,

  },

});