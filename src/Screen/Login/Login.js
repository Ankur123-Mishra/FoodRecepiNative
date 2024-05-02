//import liraries
import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import NavigationString from '../../Constant/NavigationString';

import {styles} from './Style';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import TextInputLebel from '../../Components/TextInputLabel';
import ImagePath from '../../Constant/ImagePath';
import ButtonCom from '../../Components/ButtonCom';

const Login = ({navigation}) => {
  const [isVisible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <View>
      <ImageBackground
        source={{
          uri: 'https://cdn2.momjunction.com/wp-content/uploads/2019/05/Wonderful-Newborn-Baby-Wishe-720x810.jpg',
        }}
        style={styles.imageStyle}>
        <Text style={styles.LoginTextStyle}>LOGIN</Text>
      </ImageBackground>
      <View style={styles.mainStyle}>
        <TextInputLebel
          label={'Email Address'}
          placeHolder={'Enter your email'}
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          keyboardType="email-address"
        />
        <TextInputLebel
          label={'Password'}
          placeHolder={'Enter your Password'}
          secureTextEntry={isVisible}
          rightIncon={isVisible ? ImagePath.hideEye : ImagePath.shoeeEye}
          onPressRight={() => setVisible(!isVisible)}
        />
        <TouchableOpacity 
        activeOpacity={0.7} style={styles.forgotView}
        onPress={()=>navigation.navigate(NavigationString.FORGET_PASSWORD)}
        >
          <Text style={styles.forgetText}>Forgot Password ?</Text>
        </TouchableOpacity>

        <ButtonCom btnText={'Login'} />
      </View>
      </View>
      <View style={styles.bottomView}>
          <Text>Not a Member</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(NavigationString.CHOOSE_ACCOUNT)}>
            <Text>Joni Now</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Login;
