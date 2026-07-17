import React from "react";

import {

  Image,

  Pressable,

  StyleSheet,

  Text,

  View,

} from "react-native";

import { Colors } from "../../theme/colors";

import { Spacing } from "../../theme/spacing";

import { Typography } from "../../theme/typography";

type MechanicCardProps = {

  name: string;

  service: string;

  rating: number;

  reviews: number;

  distance: string;

  available: boolean;

  image: string;

  onPress: () => void;

};

export default function MechanicCard({

  name,

  service,

  rating,

  reviews,

  distance,

  available,

  image,

  onPress,

}: MechanicCardProps) {

  return (

    <Pressable

      style={styles.card}

      onPress={onPress}

    >

      <Image

        source={{ uri: image }}

        style={styles.image}

      />

      <View style={styles.info}>

        <View style={styles.header}>

          <Text style={styles.name}>

            {name}

          </Text>

          <View

            style={[

              styles.badge,

              {

                backgroundColor: available

                  ? "#DCFCE7"

                  : "#FEE2E2",

              },

            ]}

          >

            <Text

              style={[

                styles.badgeText,

                {

                  color: available

                    ? "#166534"

                    : "#B91C1C",

                },

              ]}

            >

              {available ? "Available" : "Busy"}

            </Text>

          </View>

        </View>

        <Text style={styles.service}>

          {service}

        </Text>

        <View style={styles.footer}>

          <Text style={styles.rating}>

            ⭐ {rating} ({reviews})

          </Text>

          <Text style={styles.distance}>

            📍 {distance}

          </Text>

        </View>

      </View>

    </Pressable>

  );

}

const styles = StyleSheet.create({

  card: {

    backgroundColor: Colors.surface,

    borderRadius: 18,

    overflow: "hidden",

    marginBottom: Spacing.lg,

    elevation: 3,

  },

  image: {

    width: "100%",

    height: 180,

  },

  info: {

    padding: Spacing.lg,

  },

  header: {

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

  },

  name: {

    flex: 1,

    fontSize: Typography.fontSize.lg,

    fontWeight: Typography.fontWeight.bold,

    color: Colors.text,

    marginRight: 10,

  },

  badge: {

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 20,

  },

  badgeText: {

    fontSize: Typography.fontSize.xs,

    fontWeight: Typography.fontWeight.bold,

  },

  service: {

    marginTop: Spacing.sm,

    color: Colors.textSecondary,

    fontSize: Typography.fontSize.md,

  },

  footer: {

    marginTop: Spacing.lg,

    flexDirection: "row",

    justifyContent: "space-between",

  },

  rating: {

    fontSize: Typography.fontSize.sm,

    color: Colors.text,

    fontWeight: Typography.fontWeight.semibold,

  },

  distance: {

    fontSize: Typography.fontSize.sm,

    color: Colors.textSecondary,

  },

});