import { StyleSheet, ScrollView, View } from "react-native";
import { PaperProvider, Text, Button } from "react-native-paper";

export default function UploadPhoto() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <ScrollView>
          <Text>hiiii</Text>
          <Text>hiiii</Text>
          <Text>hiiii</Text>
          <Text>hiiii</Text>
          <Text>hiiii</Text>
        </ScrollView>
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "black",
  }
});