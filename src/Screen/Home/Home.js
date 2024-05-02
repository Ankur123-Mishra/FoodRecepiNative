//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import dummyData from './dummyData';
import colors from '../../Style/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import ImagePath from '../../Constant/ImagePath';
import {styles} from './Style';
import ButtonCom from '../../Components/ButtonCom';

// create a component
const Home = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.flatStyle}>
        <View style={styles.flexView}>
          <View>
            <Text
              style={{
                fontSize: moderateScale(12),
                color: colors.backOpacity80,
              }}>
              {item?.date}
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                color: colors.back,
                fontWeight: 'bold',
                marginTop:moderateVerticalScale(12),
              }}>
              {item?.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                tintColor: colors.backOpacity50,
              }}>
              <Image
                style={{
                  width: moderateScale(14),
                  height: moderateScale(14),
                }}
                source={ImagePath.location}
              />
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: colors.back,
                }}>
                {item?.address}
              </Text>
            </View>
          </View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}
            style={{
              width: moderateScale(64),
              height: moderateScale(64),
              borderRadius: moderateScale(32),
            }}
          />
        </View>
        <View
          style={{
            ...styles.flexView,
            marginVertical: moderateVerticalScale(8),
          }}>
          <Text>Price</Text>
          <Text>{item?.price}</Text>
        </View>

        <View style={styles.flexView}>
          <View style={{flex: 1}}>
            <ButtonCom
              btnText={'Reject'}
              btnStyle={{
                backgroundColor: colors.white,
                borderWidth: 1,
                borderColor: colors.teamColor,
              }}
              btnTextStyle={{color: colors.teamColor}}
            />
          </View>
          <View style={{marginHorizontal: moderateScale(8)}} />
          <View style={{flex: 1}}>
            <ButtonCom btnText={'Accept'} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1, backgroundColor: colors.white}}>
        <View style={styles.headerStyle}>
          <Text />
          <Text style={styles.handelText}>Nanny Line</Text>
          <Image source={ImagePath.notification} />
        </View>

        <View style={{
         flex:1,
         marginTop:moderateVerticalScale(14),
         marginHorizontal:moderateScale(16)
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dummyData}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View style={{marginBottom: moderateScale(16)}} />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
