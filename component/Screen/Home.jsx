import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <View >
        <Text>Whatsapp</Text>
        <Image source={require("../image/search.png")} style={styles.search}/>  
        <Image source={require("../image/camera.png")} style={styles.camera} />
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  camera:{
    marginLeft:20,
    hight:80,
    width:80,
    resizeMode:"contain",
    marginTop:0,
    marginBottom:0
  },
  search:{
    hight:80,
    width:80,
    resizeMode:"contain",
    marginTop:0,
    marginLeft:50,
    marginBottom:50,
  }

})