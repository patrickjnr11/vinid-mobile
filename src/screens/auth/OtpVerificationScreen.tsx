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

import PrimaryButton from "../../components/PrimaryButton";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

import { RootStackParamList } from "../../navigation/AppNavigator";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "OtpVerification"
>;

export default function OtpVerificationScreen({
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
          Verify Your Email
        </Text>

        <Text style={styles.subtitle}>
          Enter the verification code sent to your email address.
        </Text>

        <View style={styles.otpRow}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>

        <PrimaryButton
          title="Verify"
          onPress={() => {}}
        />

        <TouchableOpacity>
          <Text style={styles.resend}>
            Resend Code
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:Colors.background,
  },

  content:{
    flex:1,
    justifyContent:"center",
    paddingHorizontal:Spacing.xl,
  },

  logo:{
    width:220,
    height:70,
    resizeMode:"contain",
    alignSelf:"center",
    marginBottom:Spacing.xl,
  },

  title:{
    fontSize:Typography.fontSize.xxl,
    fontWeight:Typography.fontWeight.bold,
    color:Colors.primary,
    textAlign:"center",
  },

  subtitle:{
    textAlign:"center",
    color:Colors.textSecondary,
    marginTop:8,
    marginBottom:Spacing.xl,
    fontSize:Typography.fontSize.md,
  },

  otpRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:Spacing.xl,
  },

  box:{
    width:48,
    height:58,
    borderWidth:1,
    borderColor:"#D1D5DB",
    borderRadius:12,
    backgroundColor:"#FFFFFF",
  },

  resend:{
    textAlign:"center",
    color:Colors.primary,
    marginTop:Spacing.xl,
    fontWeight:Typography.fontWeight.bold,
  },

});