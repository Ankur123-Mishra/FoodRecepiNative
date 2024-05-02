//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import HederComp from '../../Components/HeaderCom';
import { moderateScale } from 'react-native-size-matters';
import ButtonCom from '../../Components/ButtonCom';
import { styles } from './Style';
import NavigationString from '../../Constant/NavigationString';

// create a component
const ChooseAccount = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
          <View style={{paddingHorizontal:moderateScale(10)}}>
          <HederComp/> 
          </View>
          <View style={styles.container}>  
          <Text style={styles.headingText}>Choose Your Account Type</Text>
          <View style={{alignItems:"center"}}>
            <Image 
            source={{uri:'https://toppng.com/uploads/preview/house-icon-house-flat-icon-11553412737munnvefcbj.png'}}
             style={styles.imageStyle}
             />
          <Text style={styles.textStyle}>Agency</Text>
          </View>

          <View style={{alignItems:"center"}}>
            <Image 
            source={{uri:'https://cdn-icons-png.freepik.com/256/13385/13385962.png?semt=ais_hybrid'}}
             style={styles.imageStyle}
             />
          <Text style={styles.textStyle}>Freelancer</Text>
          </View>
          <ButtonCom
          btnText={"Continue"}
           btnStyle={{
            width:"100%",
            marginBottom:20
          }}
          onPress={()=>navigation.navigate(NavigationString.REGISTER)}
          
          />
        </View>
        </SafeAreaView>
    );
};

// define your styles

//make this component available to the app
export default ChooseAccount;
