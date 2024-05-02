//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import HederComp from '../../Components/HeaderCom';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import ButtonCom from '../../Components/ButtonCom';
import {styles} from './Style';
import NavigationString from '../../Constant/NavigationString';
import TextInputLebel from '../../Components/TextInputLabel';
import ImagePath from '../../Constant/ImagePath';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// create a component
const Register = ({navigation}) => {

  const [isTrue,setTrue]=useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HederComp />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>

        <View style={{flexDirection: 'row'}}>
          <TextInputLebel
            inputStyle={{flex: 1}}
            label={'First Name'}
            placeHolder={'Plese Enter your First Name'}
            keyboardType="email-address"
          />

          <View style={{marginHorizontal: moderateScale(8)}} />

          <TextInputLebel
            inputStyle={{flex: 1}}
            label={'Last Name'}
            placeHolder={'Plese Enter your Last Name'}
            keyboardType="email-address"
          />
        </View>

        <TextInputLebel
          inputStyle={{marginVertical: moderateScale(28)}}
          label={'Last Name'}
          placeHolder={'Plese Enter your Last Name'}
          keyboardType="email-address"
        />

        <TextInputLebel
          //   inputStyle={{marginVertical: moderateScale(28)}}
          label={'Date of Birth'}
          placeHolder={'Plese Enter your dob'}
          keyboardType="email-address"
        />
        <TextInputLebel
          label={'Phone Number'}
          placeHolder={'Plese Enter your dob'}
          keyboardType="email-address"
          inputStyle={{marginVertical: moderateScale(28)}}
        />
        <TextInputLebel
          label={'Email'}
          placeHolder={'Plese Enter your dob'}
          keyboardType="email-address"
          //   inputStyle={{marginVertical: moderateScale(28)}}
        />

        <View style={{flexDirection: 'row', marginVertical: moderateScale(28)}}>
          <TextInputLebel
            inputStyle={{flex: 1}}
            label={'Country'}
            placeHolder={'Plese Enter your First Name'}
            keyboardType="email-address"
          />

          <View style={{marginHorizontal: moderateScale(8)}} />

          <TextInputLebel
            inputStyle={{flex: 1}}
            label={'Postal/Zip Code'}
            placeHolder={'Plese Enter your Last Name'}
            keyboardType="email-address"
          />
        </View>
        <TextInputLebel
          label={'Address'}
          placeHolder={'Plese Enter your Adddress'}
          keyboardType="email-address"
          //   inputStyle={{marginVertical: moderateScale(28)}}
        />

        <TextInputLebel
          label={'Refferal Code'}
          placeHolder={'Plese Enter your Refferal Code '}
          keyboardType="email-address"
          inputStyle={{marginVertical: moderateScale(28)}}
          //   inputStyle={{marginVertical: moderateScale(28)}}
        />
        <TouchableOpacity 
        style={styles.bottomView}
        activeOpacity={0.8}
        onPress={()=>setTrue(!isTrue)}
        >
            
            <Image 
           
            source={isTrue?ImagePath.activeCheckBox:ImagePath.inActiveCheckBox}

       
            style={{marginRight:moderateScale(12)}}
            />

        <Text>By Logging in, you agree to NOOVVO's Privicy and Term of use </Text>
        </TouchableOpacity>
        <ButtonCom
          btnText={"Continue"}
          onPress={()=>navigation.navigate(NavigationString.SET_PASSWORD)}
          btnStyle={{marginVertical:moderateVerticalScale(32)}}
          />
          </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
// define your styles
//make this component available to the app
export default Register;
