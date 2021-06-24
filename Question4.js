import React, { useState } from 'react';
import {
  StyleSheet,
 
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native';
import Constants from 'expo-constants';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Questions4 = () => {
  const [firstName, setFname] = useState('');
  const [waist, setWaist] = useState();

  


  async function change1(){

    

    try {
      const jsonValue = await AsyncStorage.getItem('@options')
      const x=JSON.parse(jsonValue);
      console.log('mili: ');
      console.log(x);
      x.waist=parseInt(waist,10);
      
      let y=JSON.stringify(x);
      console.log('updated:');
      console.log(y);
    AsyncStorage.setItem('@options', y)
    } catch(e) {
      // error reading value
    }
      
  
  


  }

  return (
    <View style={styles.container}>
      <Text style={styles.Qus}>Enter Your Waist Length</Text>
      <View
        style={{
          
          marginTop: 70,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderRadius: 9,
        }}>
        <TextInput
          style={styles.textInput}
          placeholder="Waist"
          value={waist}
          onChangeText={setWaist}
          placeholderTextColor="black"
        />
         
        
       
      </View>
      <TouchableOpacity style={{backgroundColor:'black',borderRadius:36,marginTop:15,paddingRight:55,paddingLeft:55,padding:20}} onPress={change1}>
        <Text style={{color:'white',textAlign:'center'}}>Set Value</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },

  Qus: {
    marginTop: 100,
    fontSize: 39,
    margin: 30,
    fontWeight: 'normal',
  },

  textInput: {
    marginLeft: 10,
    color: 'black',
    marginRight: -55,
    fontSize: 27,
    width: 300,
    padding:10
  },
  textInput2: {
    marginLeft: 10,
    color: 'black',
    marginRight: -55,
    fontSize: 27,
    width: 300,
    padding:10
  },
});

export default Questions4;
