import React from "react";
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

import BookingScreen from "../screens/booking/BookingScreen";
import BookingSuccessScreen from "../screens/booking/BookingSuccessScreen";

import MyVehiclesScreen from "../screens/vehicles/MyVehiclesScreen";
import VehicleDetailsScreen from "../screens/vehicles/VehicleDetailsScreen";
import AddVehicleScreen from "../screens/vehicles/AddVehicleScreen";

import EditProfileScreen from "../screens/profile/EditProfileScreen";
import SettingsScreen from "../screens/profile/SettingsScreen";
import FavoritesScreen from "../screens/profile/FavoritesScreen";
import ReviewsScreen from "../screens/profile/ReviewsScreen";
import HelpSupportScreen from "../screens/profile/HelpSupportScreen";
import ChangePasswordScreen from "../screens/profile/ChangePasswordScreen";

import BookingHistoryScreen from "../screens/bookings/BookingHistoryScreen";
import BookingDetailsScreen from "../screens/bookings/BookingDetailsScreen";
import LeaveReviewScreen from "../screens/bookings/LeaveReviewScreen";

import NotificationDetailsScreen from "../screens/notifications/NotificationDetailsScreen";
import EmergencyTowingScreen from "../screens/services/EmergencyTowingScreen";
import OilChangeScreen from "../screens/services/OilChangeScreen";
import CarWashScreen from "../screens/services/CarWashScreen";
import BatteryServiceScreen from "../screens/services/BatteryServiceScreen";
import TyreServiceScreen from "../screens/services/TyreServiceScreen";
import RoadsideAssistanceScreen from "../screens/services/RoadsideAssistanceScreen";
import SparePartsScreen from "../screens/services/SparePartsScreen";
import ServiceDetailsScreen from "../screens/services/ServiceDetailsScreen";
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

  Booking: undefined;
  BookingSuccess: undefined;

  MyVehicles: undefined;
  VehicleDetails: undefined;
  AddVehicle: undefined;

  EditProfile: undefined;
  Settings: undefined;
  Favorites: undefined;
  Reviews: undefined;
  HelpSupport: undefined;
  ChangePassword: undefined;

  BookingHistory: undefined;
  BookingDetails: undefined;
  LeaveReview: undefined;

  NotificationDetails: undefined;
  EmergencyTowing: undefined;
OilChange: undefined;
CarWash: undefined;
BatteryService: undefined;
TyreService: undefined;
RoadsideAssistance: undefined;
SpareParts: undefined;
ServiceDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
      <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
      <Stack.Screen name="OnboardingThree" component={OnboardingThree} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
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

      <Stack.Screen
        name="Booking"
        component={BookingScreen}
      />
      <Stack.Screen
        name="BookingSuccess"
        component={BookingSuccessScreen}
      />

      <Stack.Screen
        name="MyVehicles"
        component={MyVehiclesScreen}
      />
      <Stack.Screen
        name="VehicleDetails"
        component={VehicleDetailsScreen}
      />
      <Stack.Screen
        name="AddVehicle"
        component={AddVehicleScreen}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
      />
      <Stack.Screen
        name="Reviews"
        component={ReviewsScreen}
      />
      <Stack.Screen
        name="HelpSupport"
        component={HelpSupportScreen}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
      />

      <Stack.Screen
        name="BookingHistory"
        component={BookingHistoryScreen}
      />
      <Stack.Screen
        name="BookingDetails"
        component={BookingDetailsScreen}
      />
      <Stack.Screen
        name="LeaveReview"
        component={LeaveReviewScreen}
      />

      <Stack.Screen
        name="NotificationDetails"
        component={NotificationDetailsScreen}
      />
      <Stack.Screen
  name="EmergencyTowing"
  component={EmergencyTowingScreen}
/>

<Stack.Screen
  name="OilChange"
  component={OilChangeScreen}
/>

<Stack.Screen
  name="CarWash"
  component={CarWashScreen}
/>

<Stack.Screen
  name="BatteryService"
  component={BatteryServiceScreen}
/>

<Stack.Screen
  name="TyreService"
  component={TyreServiceScreen}
/>

<Stack.Screen
  name="RoadsideAssistance"
  component={RoadsideAssistanceScreen}
/>

<Stack.Screen
  name="SpareParts"
  component={SparePartsScreen}
/>

<Stack.Screen
  name="ServiceDetails"
  component={ServiceDetailsScreen}
/>
    </Stack.Navigator>
  );
}