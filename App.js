import React from 'react';
import { StyleSheet,Button, Text,View ,TextInput,Platform,Dimensions,ImageBackground,KeyboardAvoidingView} from 'react-native';
import Constants from 'expo-constants';
import Login from './Login';
import Dashboard from './Dashboard';
import SignUpScreen from './SignUpScreen';



const App = () => {
  return (
    <Dashboard/>
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
