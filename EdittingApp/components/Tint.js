import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { PaperProvider, Text } from "react-native-paper";

export default function Tint({ route }) {
  const { photo } = route.params || {};

  return (
    <PaperProvider>
      <View style={styles.container}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.image} />
        ) : (
          <Text>No photo provided</Text>
        )}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});
