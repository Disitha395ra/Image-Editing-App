import {StyleSheet, ScrollView,Image} from 'react-native'
import { PaperProvider } from 'react-native-paper'
export default function Home(){
    return (
        <PaperProvider>
            <ScrollView>
                <Image
                source={require('../assets/banner.jpg')}
                style={styles.banner}
                ></Image>
            </ScrollView>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
  banner:{
    width: '100%',
    height: 200
  }
});