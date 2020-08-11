import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import sungai from '../../assets/images/sungai.jpg'

//=================tidak dinamins===================//
const FotoInsta = () => {
    return (
        <View>
        <Image source={sungai} style={styles.gambar} />
        <Text style={styles.statusTeks}>Insta Story Gua</Text>
        </View>
    );
};

const PropsDinamis = () => {
    return (
        <View>
            <FotoInsta />
            <FotoInsta />
            <FotoInsta />
        </View>
    )
};

export default PropsDinamis

const styles = StyleSheet.create({
    gambar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    statusTeks: {
        fontSize: 14,
        justifyContent: 'center'
    }
})
