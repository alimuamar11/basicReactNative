import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import SampleComponen from './SampleComponen';
import StylingReactNativeComponen from './StylingReactNativeComponen';
import MateriFlexBox from './MateriFlexBox';

const App = () => {
  return(
    <ScrollView>
      <StylingReactNativeComponen />
      <SampleComponen />
      <MateriFlexBox />
  </ScrollView>
  );
};

export default App;