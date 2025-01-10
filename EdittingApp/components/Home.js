import {StyleSheet, ScrollView,Image} from 'react-native'
import { PaperProvider, Text, Button } from "react-native-paper";
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

export default function Home({navigation}){
const Stack = createStackNavigator();
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
            onPress={() => navigation.navigate("UploadPhoto")}
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