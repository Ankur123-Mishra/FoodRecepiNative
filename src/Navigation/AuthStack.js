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

const Stack=createNativeStackNavigator();

export default function AuthStack() {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={NavigationString.LOGIN} component={Login} />
        <Stack.Screen name={NavigationString.REGISTER} component={Register} />
        <Stack.Screen name={NavigationString.CHOOSE_ACCOUNT} component={ChooseAccount} /> 
        <Stack.Screen name={NavigationString.FORGET_PASSWORD} component={ForgotPassword} />
        <Stack.Screen name={NavigationString.SET_PASSWORD} component={SetPassword} />
       
      </Stack.Navigator>
    
    )
    
}