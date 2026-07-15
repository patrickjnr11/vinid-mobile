import React from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import BookingCard from "../../components/BookingCard";

import { bookings } from "../../data/bookings";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";

export default function BookingsScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>

      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          mechanic={booking.mechanic}
          service={booking.service}
          date={booking.date}
          status={booking.status}
          onPress={() =>
            navigation.navigate("BookingDetails")
          }
        />
      ))}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
});