import React from 'react';
import { StyleSheet,Button, Text,View ,TextInput,Platform,Dimensions,ImageBackground,KeyboardAvoidingView} from 'react-native';
import Constants from 'expo-constants';
import Login from './Login';
import Test from './Test';
import Pic from './Pic';

const App = () => {
  return (
    <Login/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    
  },

  
 
});

export default App;
