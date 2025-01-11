import { StyleSheet, ScrollView, View } from "react-native";
import { PaperProvider, Text, Avatar, Button, Card } from "react-native-paper";
import React, { useState } from "react";


const UploadPhotobutton =()=>{

}

const cancelbutton =()=>{

}

const editbutton =()=>{

}

export default function UploadPhoto() {
  const [photo, setphoto] = useState(null);
  return (
    
    <View style={styles.container}>
      <PaperProvider>
        <ScrollView>
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleLarge">Upload Photo</Text>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
              <Button
                icon="block-helper"
                mode="outlined"
                onPress={cancelbutton}
              >
                Cancel
              </Button>
              <Button
                icon="arrow-down-bold-circle"
                mode="contained"
                onPress={UploadPhotobutton}
              >
                UploadPhoto
              </Button>
            </Card.Actions>
          </Card>
          <Button
            icon="auto-fix"
            mode="contained"
            onPress={editbutton}
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
  editbutton:{
    margin: 30,
    backgroundColor:"green"
  }
});