import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tint from './Tint'
import Adjust from './Adjust'
import Download from './Download'

const Tab = createBottomTabNavigator();

export default function ButtonPannel({route}){
    const {photo} = route.params;
    return (
      <Tab.Navigator
        ScreenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Tint") {
              iconName = "brush-variant";
            } else if (route.name === "Adjust") {
              iconName = "chart-areasplin";
            } else if (route.name === "Download") {
              iconName = "check-underline-circle";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Tint" component={Tint} initialParams={{ photo }} options={
            {tabBarLabel: "Tint"}
        }/>
        <Tab.Screen
          name="Adjust"
          component={Adjust}
          initialParams={{ photo }}
          options={{ tabBarLabel: "Adjust" }}
        />
        <Tab.Screen
          name="Download"
          component={Download}
          initialParams={{ photo }}
          options={{ tabBarLabel: "Download" }}
        />
      </Tab.Navigator>
    );
}