/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AnimatedComponents from './src/chapter2/AnimatedComponents'
import AnimatedValue from './src/chapter2/AnimatedValue';
import AnimatedTiming from './src/chapter2/AnimatedTiming';
import AnimatedSpring from './src/chapter2/AnimatedSpring';
import AnimatedDecay from './src/chapter2/AnimatedDecay';
import AnimatedComposing from './src/chapter2/AnimatedComposing';
import AnimatedProperty from './src/chapter2/AnimatedProperty';
import SnackBar from './src/chapter3/SnpackBar';
import DrawerMenu from './src/chapter3/DrawerMenu';
import Collapse from './src/chapter3/Collapse';

const App=()=>{
  return (
    // <SafeAreaView style={{flex:1}}>
   <Collapse/>
     
    // </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
