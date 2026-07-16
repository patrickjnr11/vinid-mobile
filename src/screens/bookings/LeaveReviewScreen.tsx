import React, { useState } from "react";

import {

  SafeAreaView,

  ScrollView,

  StyleSheet,

  Text,

  TextInput,

} from "react-native";

import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../../components/PrimaryButton";

import RatingStars from "../../components/RatingStars";

import { Colors } from "../../theme/colors";

import { Spacing } from "../../theme/spacing";

import { Typography } from "../../theme/typography";

export default function LeaveReviewScreen() {

  const navigation = useNavigation<any>();

  const [rating] = useState(5);

  const [review, setReview] = useState("");

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView

        contentContainerStyle={styles.content}

        showsVerticalScrollIndicator={false}

      >

        <Text style={styles.title}>

          Leave Review

        </Text>

        <RatingStars rating={rating} />

        <TextInput

          multiline

          value={review}

          onChangeText={setReview}

          placeholder="Tell us about your experience..."

          placeholderTextColor="#9CA3AF"

          style={styles.input}

        />

        <PrimaryButton

          title="Submit Review"

          onPress={() => navigation.goBack()}

        />

      </ScrollView>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: Colors.background,

  },

  content: {

    padding: Spacing.lg,

    paddingBottom: Spacing.xxl,

  },

  title: {

    fontSize: Typography.fontSize.xxxl,

    fontWeight: Typography.fontWeight.bold,

    color: Colors.primary,

    marginBottom: Spacing.xl,

  },

  input: {

    height: 140,

    borderWidth: 1,

    borderColor: "#D1D5DB",

    borderRadius: 16,

    padding: 16,

    textAlignVertical: "top",

    marginVertical: Spacing.xl,

    fontSize: Typography.fontSize.md,

    backgroundColor: "#FFFFFF",

    color: Colors.text,

  },

});