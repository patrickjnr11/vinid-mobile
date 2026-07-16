import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";
import { RootStackParamList } from "../../navigation/RootStack";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("OnboardingOne");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/logo/splash-logo.png")}
          style={styles.logo}
        />

        <Text style={styles.subtitle}>
          Connecting you to trusted vehicle experts
        </Text>

        <ActivityIndicator
          size="large"
          color={Colors.primary}
          style={styles.loader}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    alignItems: "center",
    paddingHorizontal: Spacing.xl,
  },

  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: Spacing.xl,
  },

  subtitle: {
    fontSize: Typography.fontSize.md,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: Spacing.xl,
    lineHeight: 24,
    paddingHorizontal: Spacing.md,
  },

  loader: {
    marginTop: Spacing.md,
  },
});