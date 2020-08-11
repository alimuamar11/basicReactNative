import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import keranjang from '../../assets/icons/cart.png';

const Position = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                  <Image source={keranjang} style={styles.cartIcon}/>
                  <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.textKeranjang}>Keranjang Belanja</Text>
        </View>
    )
}

export default Position;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },
    cartIcon: {
        width: 50,
        height: 50
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#4398d1',
        width: 93,
        height: 93,
        borderRadius: 93/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative' //agar tidak keluar dari komponen ini
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6fcf97',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute', //agar bebes bergerak ,kemudian
        top: 0,
        right: 0
    },
    textKeranjang: {
        fontSize: 15,
        color: '#777777',
        marginTop: 15,
        fontWeight: 'bold'
    }
})