import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import sungai from '../../assets/images/sungai.jpg';
import sungai2 from '../../assets/images/kilowh.jpg';
import { ScrollView } from 'react-native-gesture-handler';


//=================tidak dinamins===================//
const FotoInsta = () => {
    return (
        <View style={styles.gambarStatus}>
        <Image source={sungai} style={styles.gambar} />
        <Text style={styles.statusTeks}>Insta Story Gua</Text>
        </View>
    );
};

//==================Dinamis=========================//
const  FotoInstaDinamis = (props) => {
    return (
        <View style={styles.gambarStatus}>
            <Image source={props.gambar} style={styles.gambar} />
            <Text style={styles.statusTeks}>{props.judul}</Text>
        </View>

        
    );
}
const PropsDinamis = () => {
    return (
        <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
            <FotoInsta />
            <FotoInsta />
            <FotoInstaDinamis judul="Ini story dinamis props"/>
            <FotoInstaDinamis judul="Ini story dinamis props yang kedua"/>
            <FotoInstaDinamis judul="Ini story dinamis props " gambar={sungai}/>
            <FotoInstaDinamis judul="Ini story dinamis props dengan gambar" gambar={sungai2}/>
            <FotoInstaDinamis judul="Ini story dinamis props dengan gambar" gambar={sungai}/>
        </View>
        </ScrollView>
    )
};


export default PropsDinamis

const styles = StyleSheet.create({
    gambar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    statusTeks: {
        fontSize: 12,
        maxWidth: 50
    },
    gambarStatus: {
        marginRight: 20,
        alignItems: 'center'
    }
})
