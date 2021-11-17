/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import {hscale} from './scale';
import React, {useState, useRef} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Keyboard, TextInput
} from 'react-native';

import Inventory from './src/screens/Inventory'
import { hScale,vScale } from './scale';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore.js';

const store = configureStore()

const App = () => {

  return(
    <Provider store = { store }>
    <Inventory/>
    </Provider>
  )
  

};



export default App;
