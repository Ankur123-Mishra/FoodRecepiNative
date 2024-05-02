import rect from 'react'
import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
Login,
Register,
ChooseAccount,
ForgotPassword, 
SetPassword
} from '../Screen';
import NavigationString from '../Constant/NavigationString';
import TabRouts from './TabRoutes';


const Stack=createNativeStackNavigator();

export default function HomeStack() {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={NavigationString.TAB_ROUTES} component={TabRouts} />
       
       
      </Stack.Navigator>
    
    )
    
}