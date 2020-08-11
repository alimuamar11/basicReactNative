import React, { Component } from "react";
import {View, Text, Image} from 'react-native';
import rafting from '../../assets/images/sungai.jpg'

const SampleComponen = () => {
    return(
      <View>
        <Text>Sample Componen</Text>
        <Amar />
        <Profile />
      </View>
    );
  };

  const Amar = () => {
    return(
      <Text>ini teks yang akan keluar amar</Text>
    );
  };

  class Profile extends Component {
    render() {
      return(
        <View>
          <Image source={rafting} style={{width: 100, height: 100, borderRadius:50, marginTop: 12}} />
        </View>
      );
    }
  }
  export default SampleComponen;