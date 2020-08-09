import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';
import rafting from './sungai.jpg';


const StylingReactNativeComponen = () => {
    return (
      <View>
        <View style={{padding: 12, backgroundColor: '#f2f2f2', width:212, borderRadius: 8}}>
          <Image source={rafting} style={{width:188, height:107, borderRadius: 8}} />
          <Text style={{fontSize: 14, 
            fontWeight: 'bold', marginTop: 16}}>Perahu Rafting NEW</Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#f2994a', marginTop:8}}>Rp 4.000.000 ,-</Text>
          <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>Jawa Timur</Text>
          <View style={{
            backgroundColor: '#6fcf97', 
            paddingTop: 6, paddingBottom:6, // atau bisa paddingVertikal: 6
            borderRadius: 25,
            marginTop: 20}}>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>Beli</Text>
          </View>
        </View>
      </View>
    );
  }

  export default StylingReactNativeComponen;