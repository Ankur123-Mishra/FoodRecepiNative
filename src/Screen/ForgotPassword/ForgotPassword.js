//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HederComp from '../../Components/HeaderCom';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import ButtonCom from '../../Components/ButtonCom';
import {styles} from './Style';
import NavigationString from '../../Constant/NavigationString';
import TextInputLebel from '../../Components/TextInputLabel';
import ImagePath from '../../Constant/ImagePath';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// create a component

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HederComp />
        <View style={{flex: 1}}>


          <View style={{flex: 0.2,alignItems:"center",justifyContent:"center"}}>
            <Text>Lock Icon</Text>
          </View>

          <View style={{flex: 0.4}}>
            <Text style={styles.headingText}>Forget Password</Text>
            <Text style={styles.diskText}>
              Enter the main associated with your account
            </Text>
          </View>

          <View style={{flex: 0.4}}>
            <TextInputLebel
              label={'Email Address'}
              placeHolder={'Enter your email'}
              inputStyle={{marginBottom: moderateVerticalScale(28)}}
              keyboardType="email-address"
            />

            <ButtonCom
              btnText={'send'}
              onPress={() => navigation.navigate(NavigationString.SET_PASSWORD)}
              // btnStyle={styles.btnStyle}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
