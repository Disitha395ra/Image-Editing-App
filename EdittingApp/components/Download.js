import React from "react";
import { StyleSheet, View } from "react-native";
import { PaperProvider, Text } from "react-native-paper";

export default function Download() {
  return (
    <View>
      <PaperProvider>
        <Text>This is the Download screen</Text>
      </PaperProvider>
    </View>
  );
}
