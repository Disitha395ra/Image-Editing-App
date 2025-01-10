import {StyleSheet, ScrollView,Image} from 'react-native'
import { PaperProvider,Text } from 'react-native-paper'
export default function Home(){
    return (
        <PaperProvider>
            <ScrollView>
                <Image
                source={require('../assets/banner.jpg')}
                style={styles.banner}
                />
            </ScrollView>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
  banner:{
    width: '600',
    height: 900,
  }
});