import { StyleSheet, ScrollView, View } from "react-native";
import { PaperProvider, Text, Avatar, Button, Card } from "react-native-paper";

const UploadPhotobutton =()=>{

}

const cancelbutton =()=>{

}
export default function UploadPhoto() {
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
              <Button icon="camera" mode="outlined" onPress={cancelbutton}>
                Cancel
              </Button>
              <Button
                icon="camera"
                mode="contained"
                onPress={UploadPhotobutton}
              >
                UploadPhoto
              </Button>
            </Card.Actions>
          </Card>
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
  card:{
    alignContent: "center",
    justifyContent: "center",
    margin: 0,
    marginTop: 240
  }
});