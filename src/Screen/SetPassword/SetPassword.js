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
const SetPassword = ({navigation}) => {
  // const [isTrue, setTrue] = useState(false);
  const [isVisible, setVisible] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HederComp />


        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingText}>SetPassword</Text>
        <Text style={styles.diskText}>Set a pssword for your new account<Text style={{fontWeight:"bold"}}>(+918920230653)</Text></Text>
          <TextInputLebel
          label={'Password'}
          placeHolder={'Enter your Password'}
          secureTextEntry={isVisible}
          rightIncon={isVisible ? ImagePath.hideEye : ImagePath.shoeeEye}
          onPressRight={() => setVisible(!isVisible)}
          inputStyle={{marginVertical:moderateVerticalScale(76)}}
        />

          <ButtonCom
            btnText={'Continue'}
            onPress={() => navigation.navigate(NavigationString.SET_PASSWORD)}
            btnStyle={styles.btnStyle}
            img={ImagePath.forwordArrow}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
// define your styles
//make this component available to the app
export default SetPassword;
