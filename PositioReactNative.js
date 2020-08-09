import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import keranjang from './cart.png';

const PositioReactNative = () => {
    return (
        <View>
            <Image source={keranjang} style={styles.cartIcon}/>
            <Text>Materi Position</Text>
        </View>
    )
}

export default PositioReactNative

const styles = StyleSheet.create({
    cartIcon: {
        width: 50,
        height: 50
    },
})