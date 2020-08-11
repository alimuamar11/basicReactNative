import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import StylingComponen from './pages/StylingComponen';
import Position from './pages/Position';
import SampleComponen from './pages/SampleComponen';
import FlexBox from './pages/FlexBox';
import PropsDinamis from './pages/PropsDinamis';

const App = () => {
  return(
    <ScrollView>
      {/* <SampleComponen />
      <StylingComponen />
      <Position />
      <FlexBox /> */}
      <PropsDinamis />
    </ScrollView>
  );
};

export default App;