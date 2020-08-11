import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import sungai from '../../assets/images/sungai.jpg';
import sungai2 from '../../assets/images/kilowh.jpg';


//=================tidak dinamins===================//
const FotoInsta = () => {
    return (
        <View>
        <Image source={sungai} style={styles.gambar} />
        <Text style={styles.statusTeks}>Insta Story Gua</Text>
        </View>
    );
};

//==================Dinamis=========================//
const  FotoInstaDinamis = (props) => {
    return (
        <View>
            <Image source={props.gambar} style={styles.gambar} />
            <Text style={styles.statusTeks}>{props.judul}</Text>
        </View>

        
    );
}
const PropsDinamis = () => {
    return (
        <View>
            <FotoInsta />
            <FotoInsta />
            <FotoInstaDinamis judul="Ini story dinamis props"/>
            <FotoInstaDinamis judul="Ini story dinamis props yang ke dua" gambar={sungai}/>
            <FotoInstaDinamis judul="Ini story dinamis props dengan gambar" gambar={sungai2}/>
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
