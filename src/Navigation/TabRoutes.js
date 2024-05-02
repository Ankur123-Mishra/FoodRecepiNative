import * as React from 'react';
import { Text, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,Profile,Booking } from '../Screen';
import NavigationString from '../Constant/NavigationString';
import ImagePath from '../Constant/ImagePath';
import colors from '../Style/colors';



const BottomTab = createBottomTabNavigator();

export default function TabRouts() {
  return (
   
      <BottomTab.Navigator
      screenOptions={{
       headerShown:false,
       tabBarInactiveTintColor:colors.backOpacity50,
       tabBarActiveTintColor:colors.teamColor
      }}
      >
        <BottomTab.Screen 
        name={NavigationString.HOME} component={Home} 
        options={{
          tabBarIcon:({focused})=>{
            return(
              <Image
              style={{
                 tintColor: focused? colors.teamColor:colors.backOpacity50
              }}
               source={ImagePath.home}/>
            )
          }
        }}
        />
        <BottomTab.Screen name={NavigationString.PROFILE} component={Profile} 
         options={{
          tabBarIcon:({focused})=>{
            return(
              <Image
              style={{
                 tintColor: focused? colors.teamColor:colors.backOpacity50
              }}
               source={ImagePath.prifile}/>
            )
          }
        }}
        />
        <BottomTab.Screen name={NavigationString.BOOKING} component={Booking} 
         options={{
          tabBarIcon:({focused})=>{
            return(
              <Image
              style={{
                 tintColor: focused? colors.teamColor:colors.backOpacity50
              }}
               source={ImagePath.booking}/>
            )
          }
        }}
        />
      </BottomTab.Navigator>
    
  );
}