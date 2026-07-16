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
import PrimaryButton from "../../components/PrimaryButton";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

import { RootStackParamList } from "../../navigation/RootStack";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>;

export default function ForgotPasswordScreen({
  navigation,
}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/logo/wordmark.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Forgot Password
        </Text>

        <Text style={styles.subtitle}>
          Enter your email address and we'll send you a verification code.
        </Text>

        <InputField
          label="Email Address"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <PrimaryButton
          title="Continue"
          onPress={() => navigation.navigate("OtpVerification")}
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.back}>
            ← Back to Login
          </Text>
        </TouchableOpacity>
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
    textAlign: "center",
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.md,
    marginTop: 8,
    marginBottom: Spacing.xl,
  },

  back: {
    textAlign: "center",
    marginTop: Spacing.xl,
    color: Colors.primary,
    fontWeight: Typography.fontWeight.bold,
  },
});