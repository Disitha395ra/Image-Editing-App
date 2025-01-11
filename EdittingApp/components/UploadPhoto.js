import { StyleSheet, ScrollView, View } from "react-native";
import { PaperProvider, Text, Button, Card } from "react-native-paper";
import React, { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";


export default function UploadPhoto({ navigation }) {
  const [photo, setPhoto] = useState(null); 

  const uploadPhotoButton = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        alert("You Cancelled Image Picker");
      } else if (response.errorMessage) {
        alert("An Error Occurred: " + response.errorMessage);
      } else {
        const selectedPhoto = response.assets[0].uri;
        setPhoto(selectedPhoto); 
      }
    });
  };

  const cancelButton = () => {
    navigation.navigate("Home");
  };

  const editButton = () => {
    navigation.navigate("ButtonPannel", { photo });
  };

  return (
    <View style={styles.container}>
      <PaperProvider>
        <ScrollView>
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleLarge">Upload Photo</Text>
            </Card.Content>
            {photo ? (
              <Card.Cover source={{ uri: photo }} />
            ) : (
              <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            )}
            <Card.Actions>
              <Button
                icon="block-helper"
                mode="outlined"
                onPress={cancelButton}
              >
                Cancel
              </Button>
              <Button
                icon="arrow-down-bold-circle"
                mode="contained"
                onPress={uploadPhotoButton}
              >
                Upload Photo
              </Button>
            </Card.Actions>
          </Card>
          <Button
            icon="auto-fix"
            mode="contained"
            onPress={editButton}
            style={styles.editbutton}
          >
            Edit The Photo
          </Button>
        </ScrollView>
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 18,
    backgroundColor: "blue",
    alignContent: "center",
  },
  card: {
    alignContent: "center",
    justifyContent: "center",
    margin: 0,
    marginTop: 240,
  },
  editbutton: {
    margin: 30,
    backgroundColor: "green",
  },
});
