import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { PaperProvider, Text, IconButton, MD3Colors } from "react-native-paper";

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
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <View style={styles.buttoncomponent}>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.error50}
              size={20}
              onPress={() => console.log("Pressed")}
            />
            <Text style={styles.buttontext}>Red Tint</Text>
          </View>
          <View style={styles.buttoncomponent}>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.error50}
              size={20}
              onPress={() => console.log("Pressed")}
            />
            <Text style={styles.buttontext}>Green Tint</Text>
          </View>
          <View style={styles.buttoncomponent}>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.error50}
              size={20}
              onPress={() => console.log("Pressed")}
            />
            <Text style={styles.buttontext}>Blue Tint</Text>
          </View>
          <View style={styles.buttoncomponent}>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.error50}
              size={20}
              onPress={() => console.log("Pressed")}
            />
            <Text style={styles.buttontext}>Yellow Tint</Text>
          </View>
          <View style={styles.buttoncomponent}>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.error50}
              size={20}
              onPress={() => console.log("Pressed")}
            />
            <Text style={styles.buttontext}>Gray Tint</Text>
          </View>
        </View>
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
  buttontext:{
    textAlign: "center",
    fontSize: 8,
    marginTop: 5,
    color: "black",
  },
  buttoncomponent:{
    margin: 10,
    alignItems: "center",
    borderBlockColor: "black",
  }
});
