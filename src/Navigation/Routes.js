import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeSatck';
export default function Routes() {
  return (
    <NavigationContainer>
    {false?HomeStack(): AuthStack()}
    </NavigationContainer>
  );
}