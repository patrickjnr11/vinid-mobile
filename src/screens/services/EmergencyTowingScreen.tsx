import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import ServiceProviderCard from "../../components/services/ServiceProviderCard";
import { towing } from "../../data/services/towing";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";
import { Typography } from "../../theme/typography";

export default function EmergencyTowingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>
          Emergency Towing
        </Text>

        {towing.map((provider) => (
          <ServiceProviderCard
            key={provider.id}
            name={provider.name}
            rating={provider.rating}
            service={provider.service}
            onPress={() => {}}
          />
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.background,
  },

  content:{
    padding:Spacing.lg,
  },

  title:{
    fontSize:Typography.fontSize.xxxl,
    fontWeight:Typography.fontWeight.bold,
    color:Colors.primary,
    marginBottom:Spacing.xl,
  },
});