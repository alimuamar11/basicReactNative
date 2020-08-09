import React, { Component } from "react";
import {Text, Image} from 'react-native';
import { View } from "native-base";
import potoProfile from './kilowh.jpg';

class MateriFlexBox extends Component{
    render(){
        return (
            <View>
            <View style={{flexDirection:'row',
            backgroundColor: 'grey', alignItems: 'center', justifyContent:'flex-end' }}>
                <View style={{backgroundColor: 'red',flex: 1, height: 20 }} />
                <View style={{backgroundColor: 'green', flex: 1, height: 20}} />
                <View style={{backgroundColor: 'blue',flex: 1, height: 20}} />
                <View style={{backgroundColor: 'yellow', flex: 1, height: 20}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text>Beranda</Text>
                <Text>Home</Text>
                <Text>Detail</Text>
                <Text>Kontak</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop:10}}>
                <Image source={potoProfile} style={{width: 100, height: 100, borderRadius: 50}}/>
                <View style={{marginLeft: 18}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dreamer</Text>
                    <Text style={{color: 'grey', fontSize:15}}>1 jt Subscriber</Text>
                </View>
            </View>
            </View>
        );
    }
}

export default MateriFlexBox;