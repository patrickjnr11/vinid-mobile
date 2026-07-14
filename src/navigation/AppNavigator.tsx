import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/auth/SplashScreen";
import OnboardingOne from "../screens/auth/OnboardingOne";
import OnboardingTwo from "../screens/auth/OnboardingTwo";
import OnboardingThree from "../screens/auth/OnboardingThree";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import OtpVerificationScreen from "../screens/auth/OtpVerificationScreen";

import MainTabNavigator from "./tabs/MainTabNavigator";

import MechanicsScreen from "../screens/mechanics/MechanicsScreen";
import MechanicDetailsScreen from "../screens/mechanics/MechanicDetailsScreen";

export type RootStackParamList = {
  Splash: undefined;
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
  OnboardingThree: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  OtpVerification: undefined;
  MainTabs: undefined;
  Mechanics: undefined;
  MechanicDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen
          name="OnboardingOne"
          component={OnboardingOne}
        />

        <Stack.Screen
          name="OnboardingTwo"
          component={OnboardingTwo}
        />

        <Stack.Screen
          name="OnboardingThree"
          component={OnboardingThree}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />

        <Stack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
        />

        <Stack.Screen
          name="Mechanics"
          component={MechanicsScreen}
        />

        <Stack.Screen
          name="MechanicDetails"
          component={MechanicDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}