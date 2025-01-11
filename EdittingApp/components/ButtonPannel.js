import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tint} from './Tint'
import {Adjust} from './Adjust'
import {Download} from './Download'

const Tab = createBottomTabNavigator();

export default function ButtonPannel(){
    return(
        <Tab.Navigator
            ScreenOptions={({route})=>({
                tabBarIcon: ({focused, color, size})=>{
                    let iconName;
                    if(route.name === 'Tint'){
                        iconName = focused ? 'tint' : 'tint-outline'
                    } else if(route.name === 'Adjust'){
                        iconName = focused ? 'adjust' : 'adjust-outline'
                    } else if(route.name === 'Download'){
                        iconName = focused ? 'download' : 'download-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Tint"
                component={Tint}
            />
            <Tab.Screen
                name="Adjust"
                component={Adjust}
            />
            <Tab.Screen
                name="Download"
                component={Download}
            />
        </Tab.Navigator>
    );
}