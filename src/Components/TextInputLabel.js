//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput,Image,TouchableOpacity} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../Style/colors';

// create a component
const TextInputLebel = ({
  label,
  placeHolder,
  onChangeText = () => {},
  inputStyle = {},
  rightIncon,
  onPressRight,
  ...props
  
  
}) => {
  return (
    <View style={{...styles.InputStyle, ...inputStyle}}>
      <Text style={styles.labelTexInput}>{label}</Text>
      <View style={styles.flexView}>
      <TextInput
        placeholder={placeHolder}
        style={styles.InlineStyle}
        {...props}
       
        />
        
        {!!rightIncon ? <TouchableOpacity   
        activeOpacity={0.8}
        onPress={onPressRight}
        >
      <Image style={{tintColor: colors.backOpacity30}} source={rightIncon}/>
      </TouchableOpacity>:null}
        </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  InputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.bordercolor,
    borderRadius: moderateScale(4),
    
  },
  InlineStyle: {
    paddingVertical: moderateScale(8),
    fontSize: scale(16),
    color: colors.backOpacity80,
    flex:1
  },
  labelTexInput: {
    fontSize: scale(14),
    color: colors.backOpacity50,
  },
  flexView:{
    flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
  }
});

export default TextInputLebel;
