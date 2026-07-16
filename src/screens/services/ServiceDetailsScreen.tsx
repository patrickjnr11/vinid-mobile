import React from "react";

import {

  SafeAreaView,

  ScrollView,

  StyleSheet,

  Text,

} from "react-native";

import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../../components/PrimaryButton";

import ServiceFeatureRow from "../../components/services/ServiceFeatureRow";

import PriceTag from "../../components/services/PriceTag";

import AvailabilityBadge from "../../components/services/AvailabilityBadge";

import { Colors } from "../../theme/colors";

import { Spacing } from "../../theme/spacing";

import { Typography } from "../../theme/typography";

export default function ServiceDetailsScreen() {

  const navigation = useNavigation<any>();

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView

        contentContainerStyle={styles.content}

        showsVerticalScrollIndicator={false}

      >

        <Text style={styles.title}>

          Service Details

        </Text>

        <AvailabilityBadge available={true} />

        <Text style={styles.provider}>

          Rapid Tow Services

        </Text>

        <PriceTag price="₦25,000" />

        <ServiceFeatureRow

          label="Availability"

          value="24 Hours"

        />

        <ServiceFeatureRow

          label="Arrival Time"

          value="20 - 30 Minutes"

        />

        <ServiceFeatureRow

          label="Coverage"

          value="Lagos State"

        />

        <ServiceFeatureRow

          label="Experience"

          value="8 Years"

        />

        <ServiceFeatureRow

          label="Customer Rating"

          value="4.9 ★"

        />

        <PrimaryButton

          title="Book Service"

          onPress={() => navigation.navigate("Booking")}

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

    marginBottom: Spacing.lg,

  },

  provider: {

    marginTop: Spacing.lg,

    marginBottom: Spacing.md,

    color: Colors.text,

    fontSize: Typography.fontSize.xl,

    fontWeight: Typography.fontWeight.bold,

  },

});