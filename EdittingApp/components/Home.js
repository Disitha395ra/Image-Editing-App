import {StyleSheet, ScrollView,Image} from 'react-native'
import { PaperProvider, Text, Button } from "react-native-paper";
export default function Home(){
    return (
      <PaperProvider>
        <ScrollView>
          <Image
            source={require("../assets/banner.jpg")}
            style={styles.banner}
          />
          <Button
            icon="airballoon-outline"
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={styles.homebutton}
          >
            Start Here
          </Button>
        </ScrollView>
      </PaperProvider>
    );
}

const styles = StyleSheet.create({
  banner: {
    width: "600",
    height: 900,
  },
  homebutton:{
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 60,
    top: 400,
    left: 110,
  }
});