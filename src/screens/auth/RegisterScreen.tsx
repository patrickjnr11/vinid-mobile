import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
import PrimaryButton from "../../components/PrimaryButton";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

import { RootStackParamList } from "../../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Image
          source={require("../../../assets/logo/wordmark.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Create Account
        </Text>

        <Text style={styles.subtitle}>
          Join VINID and connect with trusted vehicle experts.
        </Text>

        <InputField
          label="Full Name"
          placeholder="Enter your full name"
        />

        <InputField
          label="Email Address"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <InputField
          label="Phone Number"
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />

        <PasswordField
          label="Password"
          placeholder="Create a password"
        />

        <PasswordField
          label="Confirm Password"
          placeholder="Confirm your password"
        />

        <PrimaryButton
          title="Create Account"
          onPress={() => {}}
        />

        <View style={styles.bottom}>
          <Text style={styles.bottomText}>
            Already have an account?
          </Text>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.login}>
              Login
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Spacing.xl,
  },

  logo: {
    width: 220,
    height: 70,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: Spacing.xl,
  },

  title: {
    fontSize: Typography.fontSize.xxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    textAlign: "center",
  },

  subtitle: {
    fontSize: Typography.fontSize.md,
    color: Colors.textSecondary,
    textAlign: "center",
    marginTop: 8,
    marginBottom: Spacing.xl,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Spacing.xl,
  },

  bottomText: {
    color: Colors.textSecondary,
  },

  login: {
    marginLeft: 6,
    color: Colors.primary,
    fontWeight: Typography.fontWeight.bold,
  },
});