import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import SampleComponen from './SampleComponen';
import StylingReactNativeComponen from './StylingReactNativeComponen';
import MateriFlexBox from './MateriFlexBox';
import PositioReactNative from './PositioReactNative';

const App = () => {
  return(
    <ScrollView>
      {/* <StylingReactNativeComponen />
      <SampleComponen />
      <MateriFlexBox /> */}
      <PositioReactNative />
  </ScrollView>
  );
};

export default App;