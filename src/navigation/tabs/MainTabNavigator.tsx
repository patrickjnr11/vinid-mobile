import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../../screens/home/HomeScreen";
import ServicesScreen from "../../screens/services/ServicesScreen";
import BookingsScreen from "../../screens/bookings/BookingsScreen";
import NotificationsScreen from "../../screens/notifications/NotificationsScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";

export type MainTabParamList = {
  Home: undefined;
  Services: undefined;
  Bookings: undefined;
  Notifications: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Services"
        component={ServicesScreen}
      />

      <Tab.Screen
        name="Bookings"
        component={BookingsScreen}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}