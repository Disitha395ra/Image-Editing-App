import React from "react";
import { StyleSheet, View } from "react-native";
import { PaperProvider, Text } from "react-native-paper";

export default function Adjust() {
  return (
    <View>
      <PaperProvider>
        <Text>This is the Adjust screen</Text>
      </PaperProvider>
    </View>
  );
}
