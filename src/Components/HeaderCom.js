//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import ImagePath from '../Constant/ImagePath';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';

// create a component
const HederComp = ({
    onpressBack,

}) => {
    const navigation=useNavigation()
    const goBack=()=>{
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
           <TouchableOpacity
           onPress={!!onpressBack ? onpressBack:()=>goBack()}
           >
            <Image source={ImagePath.backArrow} />
           </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:"center",
        height:moderateScale(42)
    },
});

//make this component available to the app
export default HederComp;
