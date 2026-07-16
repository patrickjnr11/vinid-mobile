import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "../../screens/home/HomeScreen";

import ServicesScreen from "../../screens/services/ServicesScreen";

import BookingsScreen from "../../screens/bookings/BookingsScreen";

import NotificationsScreen from "../../screens/notifications/NotificationsScreen";

import ProfileScreen from "../../screens/profile/ProfileScreen";

import { Colors } from "../../theme/colors";

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

      screenOptions={({ route }) => ({

        headerShown: false,

        tabBarActiveTintColor: Colors.primary,

        tabBarInactiveTintColor: "#9CA3AF",

        tabBarStyle: {

          height: 70,

          paddingBottom: 8,

          paddingTop: 8,

          borderTopWidth: 0,

          elevation: 8,

        },

        tabBarLabelStyle: {

          fontSize: 12,

          fontWeight: "600",

        },

        tabBarIcon: ({ color, size, focused }) => {

          let iconName:

            | "home"

            | "home-outline"

            | "construct"

            | "construct-outline"

            | "calendar"

            | "calendar-outline"

            | "notifications"

            | "notifications-outline"

            | "person"

            | "person-outline";

          switch (route.name) {

            case "Home":

              iconName = focused ? "home" : "home-outline";

              break;

            case "Services":

              iconName = focused

                ? "construct"

                : "construct-outline";

              break;

            case "Bookings":

              iconName = focused

                ? "calendar"

                : "calendar-outline";

              break;

            case "Notifications":

              iconName = focused

                ? "notifications"

                : "notifications-outline";

              break;

            case "Profile":

              iconName = focused

                ? "person"

                : "person-outline";

              break;

            default:

              iconName = "home";

          }

          return (

            <Ionicons

              name={iconName}

              size={size}

              color={color}

            />

          );

        },

      })}

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