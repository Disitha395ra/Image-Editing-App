import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './components/Home'
import UploadPhoto from './components/UploadPhoto'
import ButtonPannel from './components/ButtonPannel';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
const Stack = createStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UploadPhoto"
            component={UploadPhoto}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ButtonPannel"
            component={ButtonPannel}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
