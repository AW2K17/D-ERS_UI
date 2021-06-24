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

const Questions5 = () => {
  const [firstName, setFname] = useState('');
  const [lat, setLat] = useState();

  


  async function change1(){

    

    try {
      const jsonValue = await AsyncStorage.getItem('@options')
      const x=JSON.parse(jsonValue);
      console.log('mili: ');
      console.log(x);
      console.log(typeof lat);
      x.lat=parseInt(lat, 10);
      
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
      <Text style={styles.Qus}>Enter Your Lat Length</Text>
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
          placeholder="Lat"
          value={lat}
          onChangeText={setLat}
          placeholderTextColor="black"
        />
         
        
        {/* <RNPickerSelect
          placeholder={{
            label: 'Select Unit',
            value: null,
            color: 'red',
          }}
          style={{
            inputAndroid: {
              fontSize: 19,
              color: 'black',
              backgroundColor: 'transparent',
              width: 120,
              marginLeft: 10,
            },
          }}
          placeholderColor="black"
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Inches', value: 'ht1' },
            { label: 'CM', value: 'ht2' },
          ]}
        /> */}
     
     
        
        {/* <RNPickerSelect
          placeholder={{
            label: 'Select Unit',
            value: null,
            color: 'red',
          }}
          style={{
            inputAndroid: {
              fontSize: 19,
              color: 'black',
              backgroundColor: 'transparent',
              width: 120,
              marginLeft: 10,
            },
          }}
          placeholderColor="black"
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Inches', value: 'ht1' },
            { label: 'CM', value: 'ht2' },
          ]}
        /> */}
      </View>
      <TouchableOpacity style={{backgroundColor:'black',borderRadius:36,marginTop:15,padding:15,paddingRight:55,paddingLeft:55}} onPress={change1}>
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

export default Questions5;
