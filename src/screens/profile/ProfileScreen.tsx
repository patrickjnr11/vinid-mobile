import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import ProfileHeader from "../../components/ProfileHeader";
import ProfileMenuItem from "../../components/ProfileMenuItem";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";

export default function ProfileScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <ProfileHeader
          name="Patrick Junior"
          email="patrick@email.com"
        />

        <ProfileMenuItem
          emoji="✏️"
          title="Edit Profile"
          onPress={() => navigation.navigate("EditProfile")}
        />

        <ProfileMenuItem
          emoji="🔒"
          title="Change Password"
          onPress={() => navigation.navigate("ChangePassword")}
        />

        <ProfileMenuItem
          emoji="❤️"
          title="Favorite Mechanics"
          onPress={() => navigation.navigate("Favorites")}
        />

        <ProfileMenuItem
          emoji="⭐"
          title="My Reviews"
          onPress={() => navigation.navigate("Reviews")}
        />

        <ProfileMenuItem
          emoji="⚙️"
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
        />

        <ProfileMenuItem
          emoji="❓"
          title="Help & Support"
          onPress={() => navigation.navigate("HelpSupport")}
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
  },
});