import React from "react";

import {

  Pressable,

  StyleSheet,

  Text,

} from "react-native";

import { Colors } from "../theme/colors";

import { Spacing } from "../theme/spacing";

import { Typography } from "../theme/typography";

interface SocialButtonProps {

  title: string;

  onPress: () => void;

}

export default function SocialButton({

  title,

  onPress,

}: SocialButtonProps) {

  return (

    <Pressable

      style={styles.button}

      onPress={onPress}

    >

      <Text style={styles.text}>

        {title}

      </Text>

    </Pressable>

  );

}

const styles = StyleSheet.create({

  button: {

    borderWidth: 1,

    borderColor: Colors.border,

    borderRadius: 14,

    paddingVertical: 15,

    alignItems: "center",

    marginTop: Spacing.md,

    backgroundColor: Colors.surface,

  },

  text: {

    fontSize: Typography.fontSize.md,

    color: Colors.text,

    fontWeight: Typography.fontWeight.semibold,

  },

});