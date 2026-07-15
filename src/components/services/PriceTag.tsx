import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";

import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

type PriceTagProps = {
  price: string;
};

export default function PriceTag({
  price,
}: PriceTagProps) {
  return (
    <Text style={styles.price}>
      {price}
    </Text>
  );
}

const styles = StyleSheet.create({
  price: {
    color: Colors.primary,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
  },
});