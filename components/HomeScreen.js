import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#f5f5f5'}}>
     <Image source={require('../assets/hero-bg.png')} style={{width: '100%', height: '100%', resizeMode:'contain'}}   />

     <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
     }}>
        <Text style={{
            fontSize:24,
            fontWeight:'bold',
            bottom:105
        }}>Fashion Sale</Text>
        <TouchableOpacity style={{
            borderWidth:1,
            borderRadius:15,
            backgroundColor:'red',
            width:100,
            alignItems:'center',
            bottom:100,
        }}>
        <Text style={{
            fontSize:18,
            fontWeight:'bold',
            color:'white',
        }}>
            CHECK
        </Text>
            </TouchableOpacity>
     </View>

    </View>
  )
}

export default HomeScreen