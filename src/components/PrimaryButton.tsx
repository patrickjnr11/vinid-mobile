import React from "react";

import {

  ActivityIndicator,

  Pressable,

  StyleSheet,

  Text,

} from "react-native";

import { Colors } from "../theme/colors";

import { Spacing } from "../theme/spacing";

import { Typography } from "../theme/typography";

interface PrimaryButtonProps {

  title: string;

  onPress: () => void;

  disabled?: boolean;

  loading?: boolean;

}

export default function PrimaryButton({

  title,

  onPress,

  disabled = false,

  loading = false,

}: PrimaryButtonProps) {

  return (

    <Pressable

      style={[

        styles.button,

        disabled && styles.disabledButton,

      ]}

      onPress={onPress}

      disabled={disabled || loading}

    >

      {loading ? (

        <ActivityIndicator color="#FFFFFF" />

      ) : (

        <Text style={styles.text}>

          {title}

        </Text>

      )}

    </Pressable>

  );

}

const styles = StyleSheet.create({

  button: {

    backgroundColor: Colors.primary,

    borderRadius: 14,

    paddingVertical: 16,

    alignItems: "center",

    marginTop: Spacing.md,

  },

  disabledButton: {

    opacity: 0.5,

  },

  text: {

    color: "#FFFFFF",

    fontSize: Typography.fontSize.md,

    fontWeight: Typography.fontWeight.bold,

  },

});