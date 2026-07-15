import React from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import NotificationCard from "../../components/NotificationCard";

import { notifications } from "../../data/notifications";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";

export default function NotificationsScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          title={notification.title}
          message={notification.message}
          time={notification.time}
          onPress={() =>
            navigation.navigate("NotificationDetails")
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