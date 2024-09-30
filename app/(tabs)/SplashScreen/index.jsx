import React, {useState} from "react"
import {Text, View, TextInput, Button, StyleSheet, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },


})
const SplashScreen = function () {
    const logoIst = 'https://st.depositphotos.com/1364614/1282/v/450/depositphotos_12820708-stock-illustration-golden-vector-star.jpg'
    return <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#f0e68c', '#ffd700']}
                style={style.container}
    >
              <Image
            style={style.logo}
            source={{
                uri:logoIst,
            }}
           
            />
    </LinearGradient>
   
}
export default SplashScreen; 