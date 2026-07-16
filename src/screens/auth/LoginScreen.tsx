import React, { useState } from "react";

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

import SocialButton from "../../components/SocialButton";

import { Colors } from "../../theme/colors";

import { Spacing } from "../../theme/spacing";

import { Typography } from "../../theme/typography";

import { RootStackParamList } from "../../navigation/RootStack";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const canLogin =

    email.trim().length > 0 &&

    password.trim().length > 0 &&

    !loading;

  const handleLogin = () => {

    if (!canLogin) return;

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      navigation.replace("MainTabs");

    }, 1200);

  };

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Image

          source={require("../../../assets/logo/wordmark.png")}

          style={styles.logo}

        />

        <Text style={styles.title}>

          Welcome Back

        </Text>

        <Text style={styles.subtitle}>

          Sign in to continue to VINID

        </Text>

        <InputField

          label="Email Address"

          placeholder="Enter your email"

          keyboardType="email-address"

          autoCapitalize="none"

          autoCorrect={false}

          value={email}

          onChangeText={setEmail}

        />

        <PasswordField

          label="Password"

          placeholder="Enter your password"

          value={password}

          onChangeText={setPassword}

        />

        <TouchableOpacity

          onPress={() =>

            navigation.navigate("ForgotPassword")

          }

        >

          <Text style={styles.forgot}>

            Forgot Password?

          </Text>

        </TouchableOpacity>

        <PrimaryButton

          title={

            loading

              ? "Logging in..."

              : "Login"

          }

          onPress={handleLogin}

          disabled={!canLogin}

        />

        <View style={styles.dividerContainer}>

          <View style={styles.line} />

          <Text style={styles.or}>

            OR

          </Text>

          <View style={styles.line} />

        </View>

        <SocialButton

          title="Continue with Google"

          onPress={() => {}}

        />

        <View style={styles.bottom}>

          <Text style={styles.bottomText}>

            Don't have an account?

          </Text>

          <TouchableOpacity

            onPress={() =>

              navigation.navigate("Register")

            }

          >

            <Text style={styles.register}>

              Register

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

  forgot: {

    color: Colors.primary,

    textAlign: "right",

    marginBottom: Spacing.lg,

    fontWeight: Typography.fontWeight.semibold,

  },

  dividerContainer: {

    flexDirection: "row",

    alignItems: "center",

    marginVertical: Spacing.xl,

  },

  line: {

    flex: 1,

    height: 1,

    backgroundColor: "#D1D5DB",

  },

  or: {

    marginHorizontal: 15,

    color: Colors.textSecondary,

  },

  bottom: {

    flexDirection: "row",

    justifyContent: "center",

    marginTop: Spacing.xl,

  },

  bottomText: {

    color: Colors.textSecondary,

  },

  register: {

    marginLeft: 6,

    color: Colors.primary,

    fontWeight: Typography.fontWeight.bold,

  },

});