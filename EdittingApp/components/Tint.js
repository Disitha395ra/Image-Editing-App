import React from "react";
import { StyleSheet,View } from "react-native";
import { PaperProvider, Text } from "react-native-paper";

export default function Tint({route}) {
    const {photo} = route.params;
  return (
    <View>
      <PaperProvider>
        <Text>This is the Tint screen</Text>
        {photo}
      </PaperProvider>
    </View>
  );
}
