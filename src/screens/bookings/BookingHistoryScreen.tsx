import React from "react";

import {

  SafeAreaView,

  ScrollView,

  StyleSheet,

  Text,

} from "react-native";

import { useNavigation } from "@react-navigation/native";

import BookingCard from "../../components/BookingCard";

import { Colors } from "../../theme/colors";

import { Spacing } from "../../theme/spacing";

import { Typography } from "../../theme/typography";

export default function BookingHistoryScreen() {

  const navigation = useNavigation<any>();

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView

        contentContainerStyle={styles.content}

        showsVerticalScrollIndicator={false}

      >

        <Text style={styles.title}>

          Booking History

        </Text>

        <BookingCard

          mechanic="Rapid Tow Services"

          service="Emergency Towing"

          date="12 Jul 2026"

          status="Completed"

          onPress={() =>

            navigation.navigate("BookingDetails")

          }

        />

        <BookingCard

          mechanic="Prime Oil Centre"

          service="Oil Change"

          date="28 Jun 2026"

          status="Completed"

          onPress={() =>

            navigation.navigate("BookingDetails")

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

    marginBottom: Spacing.xl,

  },

});