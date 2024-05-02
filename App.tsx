
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,} from 'react-native';
import AuthStack from './src/Navigation/AuthStack';
import Routes from './src/Navigation/Routes';
Routes
// create a component
const MyComponent = () => {
  return (
    <View style={{flex: 1,}}>
     <Routes/>
    </View>
  );
};

// define your styles


//make this component available to the app
export default MyComponent;
//1.3 hour complete