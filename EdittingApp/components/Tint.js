import React from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { PaperProvider, Text, IconButton, MD3Colors } from "react-native-paper";
import axios from "axios";

export default function Tint({ route }) {
  const { photo } = route.params;

  // Replace with your computer's IP address
  const BACKEND_URL = "http://192.168.1.10";

  const applyTint = async (tintType) => {
    try {
      const formData = new FormData();
      formData.append("photo", {
        uri: photo,
        name: "image.jpg",
        type: "image/jpeg",
      });
      formData.append("tint", tintType);

      const response = await axios.post(`${BACKEND_URL}/apply-tint`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        const tintedImageUrl = `${BACKEND_URL}${response.data.tintedImageUrl}`;
        Alert.alert(
          `${tintType} Tint Applied!`,
          `Tinted Image URL: ${tintedImageUrl}`
        );
        console.log("Tinted Image URL:", tintedImageUrl);
      } else {
        Alert.alert(
          "Failed to Apply Tint",
          response.data.message || "An unknown error occurred."
        );
      }
    } catch (error) {
      console.error("Error applying tint:", error);
      Alert.alert(
        "Error",
        "Unable to connect to the backend. Please check your connection and backend configuration."
      );
    }
  };

  const handlered = () => applyTint("red");
  const handlegreen = () => applyTint("green");
  const handleblue = () => applyTint("blue");
  const handleyellow = () => applyTint("yellow");
  const handlegray = () => applyTint("gray");

  return (
    <PaperProvider>
      <View style={styles.container}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.image} />
        ) : (
          <Text>No photo provided</Text>
        )}
        <View style={styles.buttonRow}>
          <View style={styles.buttonComponent}>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.error50}
              size={30}
              onPress={handlered}
            />
            <Text style={styles.buttonText}>Red</Text>
          </View>
          <View style={styles.buttonComponent}>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.success50}
              size={30}
              onPress={handlegreen}
            />
            <Text style={styles.buttonText}>Green</Text>
          </View>
          <View style={styles.buttonComponent}>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.primary50}
              size={30}
              onPress={handleblue}
            />
            <Text style={styles.buttonText}>Blue</Text>
          </View>
          <View style={styles.buttonComponent}>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.warning50}
              size={30}
              onPress={handleyellow}
            />
            <Text style={styles.buttonText}>Yellow</Text>
          </View>
          <View style={styles.buttonComponent}>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.neutral50}
              size={30}
              onPress={handlegray}
            />
            <Text style={styles.buttonText}>Gray</Text>
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
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "center",
  },
  buttonComponent: {
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 5,
  },
});
