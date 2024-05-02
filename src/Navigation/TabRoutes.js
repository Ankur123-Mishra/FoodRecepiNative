import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,Profile,Booking } from '../Screen';
import NavigationString from '../Constant/NavigationString';



const BottomTab = createBottomTabNavigator();

export default function TabRouts() {
  return (
   
      <BottomTab.Navigator>
        <BottomTab.Screen name={NavigationString.HOME} component={Home} />
        <BottomTab.Screen name={NavigationString.PROFILE} component={Profile} />
        <BottomTab.Screen name={NavigationString.BOOKING} component={Booking} />
      </BottomTab.Navigator>
    
  );
}